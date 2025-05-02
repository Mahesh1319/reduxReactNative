import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, fetchdata } from './Redux/Actions/Action/CounterActions'

const Counter = () => {
    const countValue = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    //const data = useSelector((state) => state.counter.data)

    useEffect(() => {
        //dispatch(fetchdata())
    }, [])
    return (
        <View>
            <Text>Counter: {countValue}</Text>
            <Button title='Increment' onPress={() => dispatch(increment())} />
            <Button title='Decrement' onPress={() => dispatch(decrement())} />
            {/* <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
            /> */}
        </View>
    )
}

export default Counter