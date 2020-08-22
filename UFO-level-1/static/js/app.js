// from data.js
var tableData = data;

// Locations in html code
var form = d3.select("form");
var req_date = d3.select("#datetime");
// var req_city = d3.select("#city");
// var req_state = d3.select("#state");
// var req_country = d3.select("#country");
// var req_shape = d3.select("#shape");
var filt_btn = d3.select("#filter-btn");
var out_table = d3.select("#ufo-table");
var tbody = out_table.select("tbody");

// // Load form selectors with data values
// var dates = Array.from(new Set(tableData.map(s => s.datetime))).map(datetime => datetime);
// var cities = Array.from(new Set(tableData.map(s => s.city))).map(city => city);
// var states = Array.from(new Set(tableData.map(s => s.state))).map(state => state);
// var countries = Array.from(new Set(tableData.map(s => s.country))).map(country => country);
// var shapes = Array.from(new Set(tableData.map(s => s.shape))).map(shape => shape);
// var i=1
// req_date.append('option value="0"')
// dates.forEach((entry) => {
//     req_date.append(`option value="${i}"`)
// })

// Event Handler Function
function runFilter() {
    // Keep the page from refreshing
    d3.event.preventDefault();
    tbody.selectAll("tr").remove();

    // Get the value entered by the user
    var inputValue = req_date.property("value");

    // Filter the data based on the input from the user
    var filteredData = tableData.filter(siting => siting.datetime === inputValue);
    console.log(filteredData);

    // output the filtered data into the table
    filteredData.forEach((siting) => {
        var row = tbody.append("tr");
        Object.entries(siting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    // form.reset();
}

// Event Listeners
filt_btn.on("click", runFilter);
form.on("submit", runFilter);