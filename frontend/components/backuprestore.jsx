import React from 'react'
import './components.css'

export default function Backup() {    
    return (
        <div className='col p-0 m-0 root-backup'>
<<<<<<< Updated upstream
            <h1 className="title">Data Backup</h1>
            <h1 className="title2">Restore Data</h1>
            <div className="dataBackup">
                <div className="mainBackup">
=======
                <div className="mainBackup">
                    <h1 className="title">Data Backup</h1>
>>>>>>> Stashed changes
                    <button className="DownloadData">Download Data</button>
                    <div className="backUp">
                        <p className="text">
                            From
                            <select className="dropdown">
<<<<<<< Updated upstream
                                <option>Seleect Month</option>
=======
                                <option>Select Month</option>
>>>>>>> Stashed changes
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                            </select>
                        </p>
                        <p className="text">
                            To
                            <select className="dropdown">
<<<<<<< Updated upstream
                                <option>Seleect Month</option>
=======
                                <option>Select Month</option>
>>>>>>> Stashed changes
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                            </select>
                        </p>
                    </div>
                </div>
                <div className="mainRestore">
                    <div className="Restore">
<<<<<<< Updated upstream
                        <input type="file" className="fileUpload" />
                    </div>
                    <button className="import">Import</button>
                </div>
=======
                    <h1 className="title2">Restore Data</h1>
                        <input type="file" className="fileUpload" />
                    </div>
                    <button className="import">Import</button>
>>>>>>> Stashed changes
            </div>
        </div>
    );
};