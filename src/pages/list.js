import React from 'react';

import Header from '../components/Header';
import RecordList from '../components/RecordList';

class List extends React.Component {

    state = {
        sortOption: "artist"
    }

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
                            <RecordList type="list" sort={this.state.sortOption}/>
                        </table>
                    </section>
                </main>
            </div>
        );
    }
}

export default List;