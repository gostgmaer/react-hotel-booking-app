import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box className="footerbottom-0 gap-5 w-full bg-blue-50 px-24 text-gray-900 flex flex-col py-2 pt-5">
      <Box className="fLists flex justify-between gap-5">
        <ul className="fList flex flex-col gap-1">
          <li className="fListItem cursor-pointer">Countries</li>
          <li className="fListItem cursor-pointer">Regions</li>
          <li className="fListItem cursor-pointer">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList flex flex-col gap-1">
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="fList flex flex-col gap-1">
          <li className="fListItem">Unique places to stay </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Unpacked: Travel articles </li>
          <li className="fListItem">Travel communities </li>
          <li className="fListItem">Seasonal and holiday deals </li>
        </ul>
        <ul className="fList flex flex-col gap-1">
          <li className="fListItem">Car rental </li>
          <li className="fListItem">Flight Finder</li>
          <li className="fListItem">Restaurant reservations </li>
          <li className="fListItem">Travel Agents </li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Investor relations</li>
        </ul>
        <ul className="fList flex flex-col gap-1">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>

          <li className="fListItem">Terms & conditions</li>
        </ul>
      </Box>
      <Box className="fText">Copyright © 2022 Lamabooking.</Box>
    </Box>
  );
};

export default Footer;
