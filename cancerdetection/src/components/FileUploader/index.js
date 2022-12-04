import {useState} from 'react';
import axios from 'axios';
import './style.css';

export const FileUploader = ({}) => {
    const [files, setFiles] = useState([]);
    const onInputChange = (e) => {
        setFiles(e.target.files)
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('//localhost:8000/upload', data)
            .then((e) => {
                console.log('Success')
            })
            .catch((e) => {
                console.error('Error', e)
            })
    };

    return (
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <form method="post" action="#" id="#" onSubmit={onSubmit}>
                    <div class="form-group files">
                        <label>Upload Your File </label>
                        <input type="file" class="form-control" multiple=""/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
    )
};