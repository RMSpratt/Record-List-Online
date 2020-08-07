import React from 'react';

import Header from '../components/Header';
import RecordList from '../components/RecordList';

class Artists extends React.Component {

    render() {
        return (
            <div>
                <Header page="artists"/>
                <main>
                    <section id="recordTableSection">
                        <table id="recordArtistsTable">
                            <thead>
                                <tr>
                                    <th>Artist</th>
                                    <th>Owned</th>
                                </tr>
                            </thead>
                            <RecordList type="artists"/>
                        </table>
                    </section>
                </main>
            </div>
        );
    }
}

export default Artists;