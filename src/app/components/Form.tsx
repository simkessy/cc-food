"use client";
import data from "../data";

import {
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  ActivationCard,
  ComboBox,
  Module,
  Button,
} from "gestalt";

const Form = () => {
  return (
    <Box color="infoBase" borderStyle="lg" fit>
      <Box
        column={12}
        paddingX={10}
        marginBottom={8}
        display="flex"
        justifyContent="center"
      >
        <Box column={12} smColumn={10} lgColumn={10} color="default">
          {/* TAKEDOWNFORMS HEADER */}
          <Box
            column={12}
            alignItems="center"
            direction="column"
            display="flex"
            padding={2}
            marginBottom={4}
          >
            <Box
              display="flex"
              direction="column"
              column={12}
              smColumn={10}
              mdColumn={8}
              lgColumn={6}
              justifyContent="center"
              alignItems="center"
            >
              {/* HEADER */}
              <Heading
                size="500"
                align="center"
                color="default"
                accessibilityLevel={1}
              >
                Climate Change and Foods
              </Heading>
              <Box paddingY={1}>
                <Text size="300" align="center" color={"subtle"}>
                  We Hungo Fo Real Tho
                </Text>
              </Box>
            </Box>
          </Box>

          <Divider />

          <Flex>
            {/* PAPER SELECTION SIDE */}
            <Box
              color="default"
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
                options={data.map((paper) => ({
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
                  title="Title: A Global Analysis of Climate Change and the Impacts on Oyster Diseases"
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
            <Box column={6} borderStyle="lg">
              <Box
                padding={8}
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Flex direction="column" flex="grow">
                  {/* MODULE */}
                  <Box column={12} padding={2}>
                    <Module.Expandable
                      id="ModuleExample "
                      accessibilityExpandLabel="Expand the module"
                      accessibilityCollapseLabel="Collapse the module"
                      items={[
                        {
                          children: <Text size="200">Children1</Text>,
                          summary: ["summary1"],
                          title: "Title1",
                        },
                        {
                          children: <Text size="200">Children2</Text>,
                          summary: ["summary2"],
                          title: "Title2",
                        },
                        {
                          children: <Text size="200">Children3</Text>,
                          summary: ["summary3"],
                          title: "Title3",
                        },
                      ]}
                    />
                  </Box>
                  {/* Event Buttons */}
                  <Flex direction="row" justifyContent="end">
                    <Box
                      marginEnd={1}
                      marginTop={8}
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
                      marginTop={8}
                      key="add-btn"
                      data-test-id="add-btn"
                    >
                      <Button size="md" text="Add Event" onClick={() => {}} />
                    </Box>
                  </Flex>
                  {/* SUBMIT FORM BUTTON */}
                  <Box justifyContent="end">
                    <Button
                      size="md"
                      text="Submit Paper"
                      onClick={() => {}}
                      disabled={false}
                    />
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
