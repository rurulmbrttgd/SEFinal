import React from 'react'
import './components.css'

export default function Backup() {    
    return (
        <div className='col p-0 m-0 root-backup'>
                    <div className="mainBackup">
                    <h1 className="title">Data Backup</h1>
                        <button className="DownloadData">Download Data</button>
                        <div className="backUp">
                            <p className="text">
                                From
                                <select className="dropdown">
                                    <option>Select Month</option>
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
                                    <option>Seleect Month</option>
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
                        <h1 className="title2">Restore Data</h1>

                            <input type="file" className="fileUpload" />
                        </div>
                        <button className="import">Import</button>
                    </div>
                </div>
    );
};