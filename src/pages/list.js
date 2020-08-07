import React from 'react';

import Header from '../components/Header';
import RecordList from '../components/RecordList';

class List extends React.Component {

    render() {
        return (
            <div>
                <Header page="list"/>
                <main>
                    <section id="recordTableSection">
                        <table id="recordListTable">
                            <thead>
                                <tr>
                                    <th>Artist</th>
                                    <th>Title</th>
                                    <th>Year</th>
                                    <th>Owned</th>
                                </tr>
                            </thead>
                            <RecordList type="list"/>
                        </table>
                    </section>
                </main>
            </div>
        );
    }
}

export default List;