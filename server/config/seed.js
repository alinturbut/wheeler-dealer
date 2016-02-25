/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

Thing.find({}).removeAsync()
    .then(() => {
        Thing.create({
                name: 'Upload your car\'s picture',
                info: 'You can upload you own car\'s picture and have as a starting point for changing it\'s rims'
            },
            {
                name: 'Upload rim picture',
                info: 'Upload the picture of your favourite rim, so you visualize it on your car.'
            });
    });

User.find({}).removeAsync()
    .then(() => {
        User.createAsync({
                provider: 'local',
                name: 'Test User',
                email: 'test@example.com',
                password: 'test'
            }, {
                provider: 'local',
                role: 'admin',
                name: 'Admin',
                email: 'admin@example.com',
                password: 'admin'
            })
            .then(() => {
                console.log('finished populating users');
            });
    });
