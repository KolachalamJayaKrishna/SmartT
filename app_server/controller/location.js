/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('location-list', {
    title: 'SmartT - find smart time tables',
    pageHeader: {
    title: 'SmartT',
    strapline: 'Online time tables'
    },
    sidebar: "Get the smart time tables online to make your daily schedule perfect",
    locations: [{
    name: 'Timetable 1',
    address: '10Am-7pm Schedule',
    rating: 3,
    facilities: ['perfect-schedule','break','lowStress'],
    distance: 'Enjoy'
    }, {
    name: 'Timetable 2',
    address: '6Am-9pm Schedule',
    rating: 4,
    facilities: ['perfect-schedule','break','Workdone'],
    distance: 'LevelEasy'
    }, {
    name: 'TimeTable 3',
    address: '8am-10pm Schedule',
    rating: 2,
    facilities: ['perfect-schedule','Lessbreak','Workdone'],
    distance: 'Work'
    }]
    });
    };

module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
    title: 'TimeTable 1',
    pageHeader: {
    title: 'TimeTable 1'
    },
    sidebar: {
    context: 'Low stress , work done',
        
    callToAction: 'Please leave a review to help other people just like you.'
    },
    location: {
    name: 'Timetable 1',
    address: '10Am-7pm Schedule',
    rating: 3,
    facilities: ['perfect-schedule','break','lowStress'],
    coords: {
    lat: 51.455041,
    lng: -0.9690884
    },
    openingTimes: [{
    days: 'Daily',
    opening: '10:00am',
    closing: '7:00pm',
    closed: false
    }, {
    days: 'mathematics Monday',
    opening: '10:00am',
    closing: '12:00pm',
    closed: false
    }, {
    days: 'Sunday',
    closed: true
    }],
    reviews: [{
    author: 'Simon Holmes',
    rating: 5,
    timestamp: '16 July 2013',
    reviewText: 'What a great timetable. '
    }, {
    author: 'Charlie Chaplin',
    rating: 3,
    timestamp: '16 June 2013',
    reviewText: 'time table is good'
    }]
        
    }
    });
    };

        module.exports.locationInfo1 = function(req, res) {
            res.render('location-info1', {
            title: 'Timetable 2',
            pageHeader: {
            title: 'Timetabel 2'
            },
            sidebar: {
            context: 'Low stress , work done',
            
            callToAction: 'Please leave a review to help other people just like you.'
            },
            location: {
            name: 'Timetable 2',
            address: '6Am-9pm Schedule',
            rating: 3,
            facilities: ['perfect-schedule','break','Workdone'],
            coords: {
            lat: 51.455041,
            lng: -0.9690884
            },
            openingTimes: [{
            days: 'daily',
            opening: '6:00am',
            closing: '9:00pm',
            closed: false
            }, {
            days: 'Physics tuesday',
            opening: '2:00am',
            closing: '4:00pm',
            closed: false
            }, {
            days: 'Sunday',
            closed: true
            }],
            reviews: [{
            author: 'Simon Holmes',
            rating: 5,
            timestamp: '16 July 2013',
            reviewText: 'What a great timetable'
            }, {
            author: 'Charlie Chaplin',
            rating: 3,
            timestamp: '16 June 2013',
            reviewText: 'It was okay.'
            }]
            
            }
            });
            };

            module.exports.locationInfo2 = function(req, res) {
                res.render('location-info2', {
                title: 'Timetable 3',
                pageHeader: {
                title: 'Timetable 3'
                },
                sidebar: {
                context: 'Hight stress',
                
                callToAction: 'please leave a review to help other people just like you.'
                },
                location: {
                name: 'Timetable 3',
                address: '8Am-10pm Schedule',
                rating: 3,
                facilities: ['perfect-schedule','break','Workdone'],
                coords: {
                lat: 51.455041,
                lng: -0.9690884
                },
                openingTimes: [{
                days: 'daily',
                opening: '8:00am',
                closing: '10:00pm',
                closed: false
                }, {
                days: 'English literature- wednesday',
                opening: '9:00am',
                closing: '11:00pm',
                closed: false
                }, {
                days: 'Sunday',
                closed: true
                }],
                reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great table.'
                }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay.'
                }]
                
                }
                });
                };

                module.exports.addReview = function(req, res) {
                    res.render('location-review-form', {
                    title: 'Review Timetable 1 on SmartT',
                    pageHeader: {
                    title: 'Review Timetable 1'
                    }
                    });
                    };