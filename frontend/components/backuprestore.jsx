import React from 'react';
import './components.css';

export default function Backup() {
    const downloadData = () => {
        // Define the URL of the CSV file
        const csvFileUrl = '/assets/data.csv';

        // Fetch the CSV file
        fetch(csvFileUrl)
            .then(response => response.blob())
            .then(blob => {
                // Create a temporary URL to the Blob object
                const url = URL.createObjectURL(blob);

                // Create a link element
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'data.csv');

                // Simulate click on the link to trigger download
                document.body.appendChild(link);
                link.click();

                // Clean up
                URL.revokeObjectURL(url);
                document.body.removeChild(link);
            })
            .catch(error => console.error('Error downloading data:', error));
    };

    return (
        <div className='col p-0 m-0 root-backup'>
            <div className="mainBackup">
                <h1 className="title">Data Backup</h1>
                <button className="DownloadData" onClick={downloadData}>Download Data</button>
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
                            <option>Select Month</option>
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
    