import React from 'react';
import { View, Text } from 'react-native';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            student: [
                {
                    id: 1,
                    name: 'Mercy',
                    faculty: 'Computer Science'
                },
                {
                    id: 2,
                    name: 'Femijetha',
                    faculty: 'Nurse'
                },
                {
                    id: 3,
                    name: 'Lissa',
                    faculty: 'Pendidikan'
                },
                {
                    id: 4,
                    name: 'Prilly',
                    faculty: 'Business'
                },
            ],
            refreshing: false 
        }
    }

    renderItem = ({ item }) => {
        <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#000'}}>
            <Text>Name: {item.name}</Text>
            <Text>Faculty: {item.faculty}</Text>
        </View>
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        const data = this.state.students.concat({id: 5, name: 'Madeline', faculty: 'ComputerScience'})
        this.setState({
            refreshing: false,
            students: data
        })
    }

    render() {

        return (
            <View>
                <FlatList
                    data={this.state.students}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    />
            </View>  
        )
    }
}
export default List;