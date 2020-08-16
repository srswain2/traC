import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {Timeline} from 'react-native-just-timeline';
import moment from "moment";

import BlinkingDot from "./TimelineComponents/BlinkingDot";

const styles = StyleSheet.create({
    exampleContainer: {
        height: Dimensions.get('window').height,
        paddingHorizontal: 13,
        paddingTop: 40,
    },
    timelineHeadingContainer: {paddingVertical: 30, paddingHorizontal: 15},
    timelineHeadingTitleText: {fontSize: 26, fontWeight: 'bold', color: '#222'},
    underline: {
        height: 3,
        width: '30%',
        marginBottom: 10,
        marginTop: 5,
        backgroundColor: '#6F98FA',
        marginLeft: 20,
    },
});

const TimelineHeader = () => (
    <View style={styles.timelineHeadingContainer}>
        <Text style={styles.timelineHeadingTitleText}>Customized Timline 1</Text>
        <View style={styles.underline} />
    </View>
);

export default class ClassComponent extends Component<any, any> {
    public data: any;
    constructor(props: any){
        super(props);
        this.data = [
            // First row in Timeline
            {
                // Here we send a function that returns a component instead of object
                title: ({ styles }) => (
                    <View>
                        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
                            {moment().format('lll')}
                        </Text>
                        <Text style={[styles, {marginBottom: 0, color: '#d2584b'}]}>
                            Item Deleted Event
                        </Text>
                    </View>
                ),
                description: ({ styles }) => (
                    <View>
                        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
                            {moment().format('lll')}
                        </Text>
                        <Text style={[styles, {marginBottom: 0, color: '#d2584b'}]}>
                            Item Deleted Event
                        </Text>
                    </View>
                ),
                time: {
                    content: moment().format('ll'),
                    style: {
                        paddingTop: 8,
                    },
                },
                icon: {
                    content: 'check',
                    style: {
                        width: 25,
                        height: 25,
                        backgroundColor: 'rgb(0, 180, 139)',
                        color: '#FFF',
                        borderColor: 'rgb(0, 163, 126)',
                        fontSize: 12,
                        paddingTop: 6,
                        borderRadius: 18,
                    },
                },
            },

            // Second row in Timeline
            {
                title: ({styles}) => (
                    <View>
                        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
                            {moment().format('lll')}
                        </Text>
                        <Text style={[styles, {marginBottom: 0, color: '#00b48b'}]}>
                            Item Added Event
                        </Text>
                    </View>
                ),
                description: {
                    content: 'Item Added Event Description',
                },
                time: {
                    content: moment().format('ll'),
                    style: {
                        paddingTop: 8,
                    },
                },
                icon: () => (<BlinkingDot/>),
            }];
    }

    render() {
        //'rgb(45,156,219)'
        return (
            <View style={styles.exampleContainer}>
                <Timeline TimelineHeader={TimelineHeader} data={this.data} />
            </View>
        );
    }
}
