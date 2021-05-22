import React,{useEffect,useState} from 'react'
import { View, Text, ScrollView, Linking, Button } from 'react-native';
import { ListItem, Avatar, Icon, Card } from "react-native-elements";
const UserInfo = ({route}) => {
    const data=route.params;
    
    const [subscriptions, setsubscriptions] = useState([]);
    const [repo, setrepo] = useState([]);
    const [expanded, setexpanded] = useState(false);
    const [info, setinfo] = useState([]);
    useEffect(() => {
     

       fetch(data.subscriptions_url)
       .then(response=>response.json())
       .then(list=>setsubscriptions(list))

      fetch(data.repos_url)
      .then(response=>response.json())
       .then(list=>setrepo(list))

       fetch(data.url)
       .then(response=>response.json())
       .then(list=>{setinfo(list)
        
        })
    }, [])
    
    return (
        <View style={{backgroundColor:'#da7f8f', height:'100%'}}>
        
            <Avatar size="xlarge" rounded containerStyle={{alignSelf:'center'}} source={{uri:data.avatar_url}}/>
           
           
            <Text style={{ alignSelf:'center', fontSize:20}}>{info.name}</Text>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Icon name="map-marker" type="font-awesome" size={18} />
            <Text style={{ fontSize:15}}> {info.location}</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
            <Icon name="users" type="font-awesome" size={18} />
            <Text > {info.followers} followers</Text>
            </View>
            <Text style={{alignSelf:'center'}}>{info.following} following</Text>
            <Text style={{alignSelf:'center'}}>{subscriptions.length} subscriptions</Text>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
            <Icon name="folder" type="font-awesome" size={18} />
            <Text style={{alignSelf:'center'}}> {info.public_repos} Repositories</Text>
            </View>
            <ScrollView scrollEnabled={expanded}>
            <ListItem.Accordion
                containerStyle={{alignSelf:'center', height:50,backgroundColor: '#cdc733'}}
                content={
                    <>
                    {/* <Icon name="place" size={30} /> */}
                    <ListItem.Content>
                        <ListItem.Title>Repositories List</ListItem.Title>
                    </ListItem.Content>
                    
                    </>
                }
                isExpanded={expanded}
                onPress={() => {
                    setexpanded(!expanded);
                }}
                >
                {repo.map((l, i) => (
                    <ListItem key={i} containerStyle={{backgroundColor: '#f2edd7', width:300,alignSelf:'center'}} bottomDivider>
                    {/* <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} /> */}
                    <ListItem.Content>
                        <ListItem.Title>{l.name}</ListItem.Title>
                       
                    </ListItem.Content>
                    
                    </ListItem>
                ))}
                </ListItem.Accordion>
            
                </ScrollView>
            
        </View>
    )
}

export default UserInfo
