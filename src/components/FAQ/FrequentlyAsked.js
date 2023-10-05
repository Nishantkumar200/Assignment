import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFAQsList } from "../../actions/action";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FrequentlyAsked() {
  const dispatch = useDispatch();
  const { FAQs, lng } = useSelector((state) => state.singlePageReducer);
  console.log(FAQs);
  useEffect(() => {
    dispatch(getFAQsList(lng));
  }, [lng]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div>
        <h4>FAQs</h4>
        {lng == "english" ? (
          <h5>
            Can’t find the answer you’re looking for? Reach out to our support
            team
          </h5>
        ) : (
          <h5>
            आप जिस उत्तर की तलाश कर रहे हैं वह नहीं मिल रहा है? कृपया हमारी
            सपोर्ट टीम से संपर्क करे
          </h5>
        )}
      </div>
      <div>
        {FAQs && FAQs.length
          ? FAQs.map((item) => (
              <>
                <Accordion style={{ width: 900 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>{item.answer}</AccordionDetails>
                </Accordion>
              </>
            ))
          : "No Data Available"}
      </div>
    </div>
  );
}

export default FrequentlyAsked;
