// from data.js
var tableData = data;

// Locations in html code
var form = d3.select("form");
var filt_btn = d3.select("#filter-btn");
var out_table = d3.select("#ufo-table");
var tbody = out_table.select("tbody");

// // Load form selectors with data values
var req_date = d3.select("#datetime");
var dates = [...new Set(tableData.map(s => s.datetime))];
req_date.append("option").attr("value", "...").text("Select a Date");
dates.forEach((entry) => {
    req_date.append("option").attr("value", entry).text(entry);
})

// Fill Cities Drop down
var req_city = d3.select("#city");
var cities = [...new Set(tableData.map(s => s.city))];
req_city.append("option").attr("value", "...").text("Select a City");
cities.forEach((entry) => {
    req_city.append("option").attr("value", entry).text(entry.toUpperCase());
})

// Fill States Drop Down
var req_state = d3.select("#state");
var states = [...new Set(tableData.map(state => state.state))];
req_state.append("option").attr("value", "...").text("Select a State");
states.forEach((entry) => {
    req_state.append("option").attr("value", entry).text(entry.toUpperCase());
})

// Fill Country Drop Down
var req_country = d3.select("#country");
var countries = [...new Set(tableData.map(s => s.country))];
req_country.append("option").attr("value", "...").text("Select a Country");
countries.forEach((entry) => {
    req_state.append("option").attr("value", entry).text(entry.toUpperCase());
})

// Fill Shape Drop Down
var req_shape = d3.select("#shape");
var shapes = [...new Set(tableData.map(s => s.shape))];
req_shape.append("option").attr("value", "...").text("Select a Shape");
shapes.forEach((entry) => {
    req_shape.append("option").attr("value", entry).text(entry.toUpperCase());
})


// Event Handler Function
function runFilter() {
    // Keep the page from refreshing
    d3.event.preventDefault();
    tbody.selectAll("tr").remove();

    // Get the value entered by the user
    var inputDate = req_date.property("value");

    // Filter the data based on the input from the user
    var filteredData = tableData.filter(siting => siting.datetime === inputDate);
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