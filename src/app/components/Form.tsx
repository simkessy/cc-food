"use client";
import { papersData } from "../data";
import Entry from "./Entry";
import {
  Box,
  Flex,
  Heading,
  ActivationCard,
  ComboBox,
  Module,
  Button,
} from "gestalt";

export default function Form() {
  return (
    <Box
      column={12}
      paddingX={10}
      marginBottom={8}
      display="flex"
      justifyContent="center"
    >
      <Box column={12} smColumn={10} lgColumn={10} color="default">
        <Flex>
          {/* PAPER SELECTION SIDE */}
          <Box
            color="warningBase"
            padding={2}
            paddingY={4}
            column={6}
            borderStyle="lg"
          >
            <Heading size="400" color="default" accessibilityLevel={2}>
              Paper
            </Heading>
            <ComboBox
              id="paper-dropdown"
              label="Select one of your your assigned papers"
              options={papersData.map((paper) => ({
                label: `${paper.id}. ${paper.title}`,
                subtext: `Journal: ${paper.journal} | DOI: ${paper.doi} | Pages: ${paper.pages}`,
                value: String(paper.id),
              }))}
            />
            <Box
              column={12}
              display="flex"
              direction="row"
              wrap
              paddingY={2}
              justifyContent="center"
            >
              <ActivationCard
                title={`A Global Analysis of Climate Change and the Impacts on Oyster Diseases.`}
                message="Authors: Okon, Ekemini Moses; Birikorang, Harriet Nketiah; Munir, Mohammad Bodrul; Kari, Zulhisyam Abdul; Téllez-Isaías, Guillermo; Khalifa, Norhan E.; Abdelnour, Sameh A.; Eissa, Moaheda E. H.; Al-Farga, Ammar; Dighiesh, Hagar Sedeek; Eissa, El-Sayed Hemdan"
                link={{
                  href: "https://www.mdpi.com/2071-1050/15/17/12775",
                  label: "Read 250 pages",
                  accessibilityLabel: "Link to paper",
                  target: "blank",
                }}
                status="notStarted"
                statusMessage="DOI: 10.3390/su151712775"
              />
            </Box>
          </Box>
          {/* MODULE AND SUBMIT */}
          <Box
            column={12}
            borderStyle="lg"
            color="infoWeak"
            height="100%"
            width="100%"
            overflow="scrollX"
          >
            <Box
              padding={8}
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Flex direction="column">
                <Box column={12} padding={2}>
                  {/* MODULE */}
                  <Module.Expandable
                    id="entry-dropdown"
                    expandedIndex={0}
                    accessibilityExpandLabel="Expand entries"
                    accessibilityCollapseLabel="Collapse entries"
                    items={[
                      {
                        children: <Entry />,
                        title: "Entry # 1",
                      },
                    ]}
                  />
                  {/* Event Buttons */}
                  <Flex direction="row" justifyContent="end">
                    <Box
                      marginEnd={1}
                      marginTop={4}
                      key="remove-btn-"
                      data-test-id="remove-btn"
                    >
                      <Button
                        size="md"
                        text="Remove Event"
                        onClick={() => {}}
                        disabled={false}
                      />
                    </Box>
                    <Box
                      marginEnd={1}
                      marginTop={4}
                      key="add-btn"
                      data-test-id="add-btn"
                    >
                      <Button size="md" text="Add Event" onClick={() => {}} />
                    </Box>
                  </Flex>
                </Box>

                {/* SUBMIT FORM BUTTON */}
                <Box justifyContent="end" display="flex">
                  <Button
                    size="md"
                    text="Submit Paper"
                    onClick={() => {}}
                    disabled={false}
                    color="red"
                  />
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
