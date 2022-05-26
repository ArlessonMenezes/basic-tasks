import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { 
    TouchableOpacity, 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';

export default function Tarefa({ data, deleteItem }) {
    return(
        <View style={ styles.container }>
            <TouchableOpacity style={styles.icon} onPress={deleteItem}>
                <FontAwesome name='trash' size={20} color='#22272e'/>
            </TouchableOpacity>
            <Text>{data.item}</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196,196,196, 0.20)',
        padding: 12,
        marginTop: 12,
        borderRadius: 4,
        flexDirection: 'row',
    },
    icon: {
        marginRight: 10,
    }
})