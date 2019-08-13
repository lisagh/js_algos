/*
You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:

counts = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "20,overflow.com",
     "2,en.wikipedia.org",
     "1,m.wikipedia.org",
     "1,mobile.sports",
     "1,google.co.uk"]

Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain near the bottom of the input.)

Sample output (in any order/format):

calculateClicksByDomain(counts)
1340    com
 900    google.com
  10    stackoverflow.com
  20    overflow.com
 410    yahoo.com
  60    mail.yahoo.com
  10    mobile.sports.yahoo.com
  50    sports.yahoo.com
   3    org
   3    wikipedia.org
   2    en.wikipedia.org
   1    m.wikipedia.org
   1    mobile.sports
   1    sports
   1    uk
   1    co.uk
   1    google.co.uk
*/
// map key is domain/subdomain value is the count
// go through the counts array
// divide the url ??? splice
// if the subdomain exists in the map add the count if not add the subdomain

// output the map.forEach

let counts = [
  "900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "20,overflow.com",
  "2,en.wikipedia.org",
  "1,m.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk"
];

function calculateClicksByDomain(counts) {
  var map = new Map();
  var set = new Set();
  for (let i = 0; i < counts.length; i++) {
    var urlarray = counts[i].split(",");
    var count = urlarray[0];
    var suburl = urlarray[1].split(".").reverse();
    var url1 = "";
    for (let j = 0; j < suburl.length; j++) {
      var url1 = suburl[j] + "." + url1;
      if (!set.has(url1)) {
        set.add(url1);
      }
      if (map.has(url1[j])) {
        var currcount = map.get(url1[j]) + count[i];
        map.set(url1[j], currcount);
      } else {
        map.set(url1[j], count[i]);
      }
    }
  }
  var res = [];
  function result(k, v) {
    res.push([k, v]);
  }
  map.forEach(result);
  return res;
}

console.log(calculateClicksByDomain(counts));
