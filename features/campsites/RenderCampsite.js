import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderCampsite = ({ campsite }) => {
    if (campsite) { // here uses what is called conditional rendering meaning itll use a condition to decide what it will render 
        return (    // will check if the campsite prop is null or undefined- which it does by using if campsite- which will return false if its equal to null or undefined, if a truthy value it will execute the code inside if blcok
            <Card containerStyle={{ padding: 0 }}>  
                <Card.Image source={campsite.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {campsite.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{campsite.description}</Text>
            </Card>
        );
    }
    return <View />; //if campsite returns false, will return this, if i doesnt return anything it will cause an error
};

export default RenderCampsite;