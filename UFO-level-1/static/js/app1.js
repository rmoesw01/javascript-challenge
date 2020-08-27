// from data.js
var tableData = data;

// Locations in html code
var form = d3.select("form");
var req_date = d3.select("#datetime");
var filt_btn = d3.select("#filter-btn");
var out_table = d3.select("#ufo-table");
var tbody = out_table.select("tbody");

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
}

// Event Listeners
filt_btn.on("click", runFilter);
form.on("submit", runFilter);