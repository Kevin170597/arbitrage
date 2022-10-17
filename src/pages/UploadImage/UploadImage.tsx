import { useState } from 'react';
import { uploadImage } from '../../services';

export const UploadImage = () => {
    const [file, setFile] = useState(null);

    const selectedHandler = (e:any) => setFile(e.target.files[0]);

    const upload = async (e:any) => {
        e.preventDefault();
        if (!file) { alert('file not found'); return; }
        await uploadImage(file);
        setFile(null);
    }

    return (
        <div>
            <h1>Upload</h1>
            <form onSubmit={upload}>
                <input onChange={(selectedHandler)} type="file" />
                <button type="submit">send</button>
            </form>
        </div>
    )
};