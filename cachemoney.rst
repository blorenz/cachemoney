CacheMoney.js is an explicit cache control system for the browser.  Browsers are decent at caching, but they are made for a
general solution.  You, as the app developer, are the one who is most intimately familiar with the interactions of your
architecture.  At least you should be, anyway.

Why do I need this?
To quote Forrest Gump and replace one of the words, Browser cache is like a box of chocolates, you never know what
you're going to get.  There is a lot of optimization that can be done in the front end to provide the user a better
overall experience.  If snappy, instant data is your goal then you're a candidate for frontend cache.


What does this add to my workflow?
CacheMoney.js works best in API-style application that returns data that doesn't frequently change.  The idea is to
cachemoney the API responses.  Please take note-- this is different than backend caching because you are caching data
that can be user-sensitive.  Backend caching functions on the notion that a lot of people want the same data.  Frontend
caching focuses on one person wanting repeated or slow-changing data.


What's the payoff?
A standard quantifier of return in life is money.  It's all about the Benjamins and it is no different in CacheMoney.js.
Just substitute the word 'time' for 'money', and 'Benjamins' for 'milliseconds'.


I'm already caching!
Excellent to hear!  Are you caching on the frontend or the backend?  The majority of solutions out there are focused on
backend-caching memcache, Varnish, OTHERTECH, OTHERTECH, Redis as a cache...the list goes on.

Inspired by talk at 2013 Velocity in Santa Clara.