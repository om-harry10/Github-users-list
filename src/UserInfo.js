import React,{useEffect,useState} from 'react'
import { View, Text, ScrollView, Linking, Button } from 'react-native';
import { ListItem, Avatar, Icon } from "react-native-elements";
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
        <View style={{backgroundColor:'#da7f8f'}}>
        
            <Avatar size="xlarge" rounded containerStyle={{alignSelf:'center'}} source={{uri:data.avatar_url}}/>
            <ScrollView>
            <Text style={{ alignSelf:'center', fontSize:20}}>{info.name}</Text>
            <Text style={{alignSelf:'center', fontSize:15}}>{info.location}</Text>
            <Text style={{alignSelf:'center'}}>{info.followers} followers</Text>
            <Text style={{alignSelf:'center'}}>{info.following} following</Text>
            <Text style={{alignSelf:'center'}}>{subscriptions.length} subscriptions</Text>
            <Text style={{alignSelf:'center'}}>{info.public_repos} Repositories</Text>
            <ListItem.Accordion
                containerStyle={{width:300,alignSelf:'center', height:50,backgroundColor: '#cdc733'}}
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
