import React, { useState, useEffect, useCallback } from 'react'
import { View, FlatList, Image } from 'react-native'
import LazyImage from '../../lib_frontend/components/LazyImage';
import { Post, Header, Avatar, Name, Description, Loading, BotaoCurtiu, Curtida } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Feed() {
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [viewable, setViewable] = useState([]);
    const [curtida, setCurtida] = useState([]);

    async function loadPage(pageNumber = page, shouldRefresh = false) {
        if (total && pageNumber > total) return;
        setLoading(true);
        const response = await fetch(`http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`);
        const data = await response.json();
        const totalItems = response.headers.get('X-Total-Count');
        setTotal(Math.floor(totalItems / 5));
        setFeed(shouldRefresh ? data : [...feed, ...data]);
        setPage(pageNumber + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadPage();
    }, []);

    async function refreshList() {
        setRefreshing(true);
        await loadPage(1, true);
        setRefreshing(false);
    }

    const handleViewableChanged = useCallback(({ changed }) => {
        setViewable(changed.map(({ item }) => item.id));
    }, []);

    let check = false
    if (curtida == false) {
        check = (
            <Image style={{ height: 24, width: 24 }}
                source={require('../../../assets/imgs/feed/like_vermelho.png')}
            />
        )
    } else {
        check = (
            <Image style={{ height: 24, width: 24 }}
                source={require('../../../assets/imgs/feed/like_vermelho.png')}
            />
        )
    }


    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 60, backgroundColor: "#FFF" }}>
                <View style={{ height: 50, width: 50, marginLeft: 15, alignItems: "center" }}>
                    <Icon name="bars" size={24} style={{ color: '#1E90FF', paddingTop: 10 }} onPress={() => this.props.navigation.openDrawer()} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ top: -50 }} source={require('../../../assets/imgs/logo1.png')} />
                </View>
            </View>
            <FlatList data={feed}
                keyExtractor={post => String(post.id)}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.1}
                onRefresh={refreshList}
                refreshing={refreshing}
                onViewableItemsChanged={handleViewableChanged}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 20 }}
                ListFooterComponent={loading && <Loading />}

                renderItem={({ item }) => (
                    <Post>
                        <Header>
                            <Avatar source={{ uri: item.author.avatar }} />
                            <Name>{item.author.name}</Name>
                        </Header>

                        <LazyImage
                            shouldLoad={viewable.includes(item.id)}
                            aspectRatio={item.aspectRatio}
                            source={{ uri: item.image }}
                            smallSource={{ uri: item.small }} />

                        <Curtida>
                            <BotaoCurtiu onPress={() => { 
                                if(curtida){
                                    setCurtida(false);
                                } else{
                                    setCurtida(true)
                                }
                             }}>
                                {check}
                            </BotaoCurtiu>
                        </Curtida>

                        <Description>
                            <Name>{item.author.name} {item.description}</Name>
                        </Description>
                    </Post>
                )} />
        </View >
    )
}