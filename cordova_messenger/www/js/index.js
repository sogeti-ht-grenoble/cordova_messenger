/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    deviceId: "",
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //document.addEventListener('sendmessage', this.onSendMessage, false);
        var button = document.getElementById('send-message').addEventListener('click', this.onSendMessage, false);
        
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    
    onSendMessage:function(){
        app.sendMessage('sendmessage');
    },
    
    sendMessage: function(){        
        var element = document.getElementById('message');
        if(element.value.length > 0){
            document.getElementById('display-message').innerHTML = "<b>"+app.deviceId+"</b>:  " + element.value;
            document.getElementById('message').value = "";
        } else {
            document.getElementById('display-message').innerHTML = "<b>Please Type a Message</b>";
            document.getElementById('message').value = "";
        }
        console.log('Send Message: ' + element.value);
    },
    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        app.deviceId = device.uuid;  
        console.log('Received Event: ' + id);
    }
};

app.initialize();