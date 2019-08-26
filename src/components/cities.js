import React from "react";
import "../assets/css/cities.css";

const Cities = () => {
  return (
    <React.Fragment>
      <table id="citiesDatabase" align="center">
        <tr class="header">
          <th>City</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>London</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Paris</td>
          <td>FR</td>
        </tr>
        <tr>
          <td>Sydney</td>
          <td>AU</td>
        </tr>
        <tr>
          <td>Tokyo</td>
          <td>JP</td>
        </tr>
        <tr>
          <td>New York City</td>
          <td>USA</td>
        </tr>
        <tr>
          <td>Los Angeles</td>
          <td>USA</td>
        </tr>
        <tr>
          <td>Chicago</td>
          <td>USA</td>
        </tr>
      </table>
    </React.Fragment>
  );
};

export default Cities;
