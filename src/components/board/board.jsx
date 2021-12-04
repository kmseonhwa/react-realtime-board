import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import MessageBox from '../message_box/message_box';
import ImageBox from 'components/image_box/image_box';
import styles from './board.module.css';
import { itemTemplate } from 'common/template';
import { BOARD, IMAGE_BOX, MESSAGE_BOX, WEBCAM_BOX } from 'common/constants';
import WebcamBox from 'components/webcam_box/webcam_box';

const Board = ({ authService, database, imageUploader }) => {
    const dndZoneRef = useRef();
    const location = useLocation();
    const [itemType, setItemType] = useState(BOARD);
    const [currKey, setCurrKey] = useState(null);
    const [userId, setUserId] = useState(location.state && location.state.id);
    const [messages, setMessages] = useState({});
    const [images, setImages] = useState({});
    const [webcam, setWebcam] = useState({}); // null
    const navigate = useNavigate();

    useEffect(() => {
        const stopSync = authService //
            .onAuthChange((user) => {
                if (!user) {
                    navigate('/');
                } else {
                    setUserId(user.uid);
                    database.getMessage(userId, (messages) => {
                        setMessages(messages);
                    });
                    database.getImages(userId, (images) => {
                        setImages(images);
                    });
                    database.getWebcam(userId, (webcam) => {
                        setWebcam(webcam);
                    });
                }
            });
        return () => {
            stopSync();
            // setMessages({});
            // setImages({});
        };
    }, [userId, authService, database, navigate]);

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        addImageBox(e.dataTransfer.files[0], e.clientX, e.clientY);
    }, []);

    const setEventListeners = useCallback(() => {
        // BUG
        // sometimes dndZoneRef undefined
        dndZoneRef.current.addEventListener('dragenter', handleDragEnter);
        dndZoneRef.current.addEventListener('dragleave', handleDragLeave);
        dndZoneRef.current.addEventListener('dragover', handleDragOver);
        dndZoneRef.current.addEventListener('drop', handleDrop);

        window.addEventListener('keydown', changeCurrKey);
        window.addEventListener('keyup', changeCurrKey);
    }, [handleDragEnter, handleDragLeave, handleDragOver, handleDrop]);

    const removeEventListeners = useCallback(() => {
        dndZoneRef.current.removeEventListener('dragenter', handleDragEnter);
        dndZoneRef.current.removeEventListener('dragleave', handleDragLeave);
        dndZoneRef.current.removeEventListener('dragover', handleDragOver);
        dndZoneRef.current.removeEventListener('drop', handleDrop);

        window.addEventListener('keydown', changeCurrKey);
        window.addEventListener('keyup', changeCurrKey);
    }, [handleDragEnter, handleDragLeave, handleDragOver, handleDrop]);

    // Handle drag and drop
    useEffect(() => {
        setEventListeners();
        return () => {
            // removeEventListeners();
        };
    }, [setEventListeners, removeEventListeners]);

    const changeCurrKey = (e) => {
        if (e.type === 'keydown') {
            console.log(e.key);
            setCurrKey(e.key);
        }
        if (e.type === 'keyup') {
            setCurrKey(null);
        }
    };

    /**
     * Event Delegation on Board
     * ⬇️
     */

    /**
     * @param clickEvent - Used to get coordinates. Don't use it for type checking.
     * @param itemType - Used to check item type when deleting it.
     */
    const handleBoardClick = useCallback((clickEvent, itemType) => {
        if (!itemType) return;

        /**
         * @currKey
         * Alt -> move clicked item
         * Meta -> delete clicked item
         * m -> create MessageBox
         * i -> create ImageBox
         * d -> create DrawingBox ---> expected
         * w -> create WebcamBox ---> expected
         * v -> create VideoBox ---> expected
         * g -> create GameBox ---> expected
         */

        // if (currKey === 'm') {
        //     addMessageBox(clickEvent.clientX, clickEvent.clientY);
        // } else if (currKey === 'i') {
        //     addImageBox();
        // } else if (currKey === 'Meta') {
        //     if (itemType === MESSAGE_BOX) {
        //         removeMessageBox(clickEvent.target.id);
        //     }
        //     if (itemType === IMAGE_BOX) {
        //         removeImageBox(clickEvent.target.id);
        //     }
        // }

        /**
         * BUG
         * If the keyboard language is not English,
         * The code below is ignored
         */
        switch (currKey) {
            case 'm':
                addMessageBox(clickEvent.clientX, clickEvent.clientY);
                break;
            case 'i':
                addImageBox(); // ---> expected
                break;
            case 'w':
                addWebcamBox(clickEvent.clientX, clickEvent.clientY);
                break;
            case 'Meta':
                if (itemType === MESSAGE_BOX) {
                    removeMessageBox(clickEvent.target.id);
                }
                if (itemType === IMAGE_BOX) {
                    removeImageBox(clickEvent.target.id);
                }
                if (itemType === WEBCAM_BOX) {
                    removeWebcamBox(clickEvent.target.id);
                }
                break;
        }
    });

    /**
     * MessageBox
     * ⬇️
     */

    const addMessageBox = (x, y) => {
        const id = Date.now();
        const rect = dndZoneRef.current.getBoundingClientRect();
        const template = { ...itemTemplate[MESSAGE_BOX] };
        template.id = id;
        template.x = x - rect.left;
        template.y = y - rect.top;
        template.text = '';
        setMessages((messages) => {
            const updated = { ...messages };
            updated[id] = template;
            return updated;
        });
        database.saveMessage(userId, template);
    };

    const removeMessageBox = useCallback((messageId) => {
        setMessages((messages) => {
            const updated = { ...messages };
            delete updated[messageId];
            return updated;
        });
        database.removeMessage(userId, messageId);
    });

    const updateMessageBox = useCallback((messageId, text, deltaX, deltaY) => {
        const x = messages[messageId].x + deltaX;
        const y = messages[messageId].y + deltaY;
        const changedMessage =
            deltaX || deltaY
                ? { ...messages[messageId], x, y }
                : { ...messages[messageId], text };
        setMessages((messages) => {
            const updated = { ...messages };
            updated[messageId] = changedMessage;
            return updated;
        });
        database.saveMessage(userId, changedMessage);
    });

    /**
     * ImageBox
     * ⬇️
     */

    const addImageBox = async (file, x, y) => {
        try {
            // TODO
            // !file, show image upload widget
            if (!file) return;
            const uploaded = await imageUploader.upload(file);
            const id = Date.now();
            const rect = dndZoneRef.current.getBoundingClientRect();
            const template = { ...itemTemplate[IMAGE_BOX] };
            template.id = id;
            template.x = x - rect.left;
            template.y = y - rect.top;
            template.fileUrl = uploaded.url
                ? uploaded.url
                : '불러올 수 없는 이미지입니다!';
            setImages((images) => {
                const updated = { ...images };
                updated[id] = template;
                return updated;
            });
            database.saveImage(userId, template);
        } catch (e) {
            console.error(e);
        }
    };

    const removeImageBox = (imageId) => {
        setImages((images) => {
            const updated = { ...images };
            delete updated[imageId];
            return updated;
        });
        database.removeImage(userId, imageId);
    };

    const updateImageBox = (imageId, deltaX, deltaY) => {
        const x = images[imageId].x + deltaX;
        const y = images[imageId].y + deltaY;
        const updatedImage = { ...images[imageId], x, y };
        setImages((images) => {
            const updated = { ...images };
            updated[imageId] = updatedImage;
            return updated;
        });
        database.saveImage(userId, updatedImage);
    };

    /**
     * WebcamBox
     * ⬇️
     */
    const addWebcamBox = (x, y) => {
        if (Object.keys(webcam).length > 0) {
            window.alert('웹캠은 한 개만 소유할 수 있습니다!');
            return;
        }
        const id = Date.now();
        const rect = dndZoneRef.current.getBoundingClientRect();
        const template = { ...itemTemplate[WEBCAM_BOX] };
        template.id = id;
        template.x = x - rect.left;
        template.y = y - rect.top;
        template.userId = userId;
        setWebcam((webcam) => {
            const updated = { ...webcam };
            updated[id] = template;
            return updated;
        });
        database.saveWebcam(userId, template);
    };

    const removeWebcamBox = (webcamId) => {
        setWebcam((webcam) => {
            const updated = { ...webcam };
            delete updated[webcamId];
            return updated;
        });
        database.removeWebcam(userId, webcamId);
    };

    /**
     * Update position and turn the cam on/off
     */
    const updateWebcam = (webcamId, deltaX, deltaY) => {
        const x = webcam[webcamId].x + deltaX;
        const y = webcam[webcamId].y + deltaY;
        const updatedWebcam = { ...webcam[webcamId], x, y };
        setWebcam((webcam) => {
            const updated = { ...webcam };
            updated[webcamId] = updatedWebcam;
            return updated;
        });
        database.saveWebcam(userId, updatedWebcam);
    };

    return (
        <div
            ref={dndZoneRef}
            className={styles.board}
            onClick={(e) => handleBoardClick(e, itemType)}
        >
            {/**
             * TODO
             * All draggable itwem has <Draggable>
             * Why not use DraggableItem wrapper.
             *
             */}
            {Object.keys(messages).map((key) => (
                <MessageBox
                    key={key}
                    pressedKey={currKey} //
                    message={messages[key]}
                    // handleMessageClick -> handleBoardClick
                    // onMessageClick={handleMessageClick}
                    onMessageClick={handleBoardClick}
                    onMessageChange={updateMessageBox}
                />
            ))}
            {Object.keys(images).map((key) => (
                <ImageBox
                    key={key}
                    pressedKey={currKey}
                    img={images[key]}
                    onImageClick={handleBoardClick}
                    onImageChange={updateImageBox}
                />
            ))}
            {/* 
            /**
             * User can have one WebcamBox.
             * {
             *  webcam: {
             *      id: userId,
             *      x,
             *      y,
             *      playing
             *  }  
             * }
            */}
            {Object.keys(webcam).map((key) => (
                <WebcamBox
                    key={key}
                    pressedKey={currKey}
                    userId={userId}
                    webcam={webcam[key]}
                    onWebcamClick={handleBoardClick}
                    onWebcamChange={updateWebcam}
                />
            ))}
        </div>
    );
};

export default Board;
