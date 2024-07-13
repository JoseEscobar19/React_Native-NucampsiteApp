import { StyleSheet,Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';


const RenderCampsite = (props) => {
    const { campsite } = props;
        if (campsite) { // here uses what is called conditional rendering meaning itll use a condition to decide what it will render 
            return (    // will check if the campsite prop is null or undefined- which it does by using if campsite- which will return false if its equal to null or undefined, if a truthy value it will execute the code inside if blcok
              <Card containerStyle={Styles.cardContainer} >
                <Card.Image source={{ uri: baseUrl + campsite.image}}>
                    <View style={{ justifyContent: 'center' , flex: 1}}>
                        <Text
                            style={{
                                color: 'whiite',
                                textAlign: "center",
                                fontSize: 20
                            }}
                        >
                            {campsite.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{campsite.description}</Text>
                <Icon 
                    name={props.isFavorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() =>
                        props.favorite
                            ? console.log("already set as a favorite")
                            : props.markFavorite()
                    }
                />
              </Card>
            );
        }
        return <View />; //if campsite returns false, will return this, if i doesnt return anything it will cause an error
}; 

const Styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    }
});

export default RenderCampsite; 