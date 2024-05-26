import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import PeopleDetails from './PeopleDetail';
import { loadInitialContacts } from '../actions';

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
    }
})

class PeopleList extends Component {
    componentDidMount() {
        this.props.loadInitialContacts();
    }

    renderInitialView() {
        if (this.props.detailView === true) {
            return (
                <PeopleDetails />
            )
        } else {
            return (
                <FlatList
                    data={this.props.people}
                    renderItem={({item}) => <PeopleItem people={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            )
        }
    }

    render() {
        <View style={styles.container}>
            {this.renderInitialView()}
        </View>
    }
}

const mapStateToProps = state => {
    return {
        people: state.people,
        detailView: state.detailView,
    }
}

export default connect(mapStateToProps, { loadInitialContacts })(PeopleList);
