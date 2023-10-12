"use client";
import {
  Flex,
  Heading,
  Box,
  Divider,
  RadioGroup,
  SelectList,
  Text,
  ComboBox,
  TextField,
  TextArea,
} from "gestalt";
import { impactList } from "../data";
import Dropbox from "next-auth/providers/dropbox";

export default function Entry() {
  return (
    <Flex direction="column" gap={4}>
      {/* Client Hazards */}
      <Flex direction="column" gap={2}>
        <Box marginBottom={4}>
          <Heading size="400">Climate Hazard</Heading>
          <Divider />
        </Box>
        {/* Client Harzard Options */}
        <RadioGroup
          legend="climate hazard"
          id="climate-hazard-group"
          legendDisplay="hidden"
        >
          <Flex gap={4}>
            <Flex direction="column" gap={1}>
              <RadioGroup.RadioButton
                checked={false}
                id="warming"
                label="Warming"
                name="client-hazard"
                onChange={() => {}}
                value="Warming"
              />
              <RadioGroup.RadioButton
                checked={false}
                id="ocean-acidification"
                label="Ocean Acidification"
                name="client-hazard"
                onChange={() => {}}
                value="Ocean Acidification"
              />
              <RadioGroup.RadioButton
                checked={false}
                id="storms"
                label="Storms"
                name="client-hazard"
                onChange={() => {}}
                value="Storms"
              />
              <RadioGroup.RadioButton
                checked={false}
                id="fires"
                label="Fires"
                name="client-hazard"
                onChange={() => {}}
                value="Fires"
              />
              <RadioGroup.RadioButton
                checked={false}
                id="natural-cover-change"
                label="Natural Cover Change"
                name="client-hazard"
                onChange={() => {}}
                value="Natural Cover Change"
              />
            </Flex>
            <Flex direction="column" gap={1}>
              <RadioGroup.RadioButton
                checked={false}
                id="atmosphere-co2"
                label="Atmospheric CO2"
                name="client-hazard"
                onChange={() => {}}
                value="Atmospheric CO2 Increases"
              />
              <RadioGroup.RadioButton
                checked={false}
                id="precipitation"
                label="Precipitation"
                name="client-hazard"
                onChange={() => {}}
                value="Precipitation"
              />
              <RadioGroup.RadioButton
                checked={false}
                id="droughts"
                label="Droughts"
                name="client-hazard"
                onChange={() => {}}
                value="Droughts"
              />
              <RadioGroup.RadioButton
                checked={false}
                id="heatwaves"
                label="Heatwaves"
                name="client-hazard"
                onChange={() => {}}
                value="Heatwaves"
              />
            </Flex>
          </Flex>
        </RadioGroup>
      </Flex>

      {/* Impact */}
      <Flex direction="column" gap={2}>
        <Box marginBottom={4}>
          <Heading size="400">Impact</Heading>
          <Divider />
        </Box>
        {/* Impact Dropdown */}
        <Heading size="300">How?</Heading>
        <ComboBox
          id="impact-select-list"
          label="How?"
          labelDisplay="hidden"
          onChange={() => {}}
          size="md"
          placeholder="Select the type of impact or somethin'"
          options={impactList.map(({ label, value }) => ({ label, value }))}
          helperText="Can add text here to explain this more if needed"
        />
        {/* Impact Positive or Negative */}
        <Text weight="bold">
          Was the climate impact positive or negative (positive: increase in
          quantity/quality, negative: decrease in quantity/quality)?
        </Text>
        <RadioGroup
          legend="Climate hazard"
          id="climate-hazard-group"
          legendDisplay="hidden"
        >
          <RadioGroup.RadioButton
            checked={false}
            id="positive-impact"
            label="Positive Impact"
            name="impact-level"
            onChange={() => {}}
            value="Positive Impact"
          />
          <RadioGroup.RadioButton
            checked={false}
            id="neutral-impact"
            label="Neutral Impact"
            name="impact-level"
            onChange={() => {}}
            value="Neutral Impact"
          />
          <RadioGroup.RadioButton
            checked={false}
            id="negative-impact"
            label="Negative Impact"
            name="impact-level"
            onChange={() => {}}
            value="Negative Impact"
          />
        </RadioGroup>
      </Flex>

      {/* Food Item */}
      <Flex direction="column" gap={2}>
        <Box marginBottom={4}>
          <Heading size="400">Food Item</Heading>
          <Divider />
        </Box>
        {/* Food Items Categories */}
        <Flex wrap justifyContent="between">
          <Box column={6} padding={1}>
            <ComboBox
              id="food-class"
              label="Class"
              noResultText="Can't find"
              placeholder="Class"
              options={makeMockArray("Class Item", 10000)}
            />
          </Box>
          <Box column={6} padding={1}>
            <ComboBox
              id="food-category"
              label="Category"
              noResultText="Can't find"
              placeholder="Category"
              options={makeMockArray("Category", 1000)}
            />
          </Box>
          <Box column={6} padding={1}>
            <ComboBox
              id="food-group"
              label="Group"
              noResultText="Can't find"
              placeholder="Group"
              options={makeMockArray("Group", 1000)}
            />
          </Box>
          <Box column={6} padding={1}>
            <ComboBox
              id="food-species"
              label="Species"
              noResultText="Can't find"
              placeholder="Species"
              options={makeMockArray("Species")}
            />
          </Box>
        </Flex>
        {/* Quote from paper */}
        <Box>
          <Text>Quote from paper?</Text>
          <TextArea
            rows={3}
            name="quote"
            id="quote"
            onChange={() => {}}
            value=""
          />
        </Box>
      </Flex>

      {/* Location */}
      <Flex direction="column" gap={2}>
        <Box marginBottom={4}>
          <Heading size="400">Location</Heading>
          <Divider />
        </Box>
        <ComboBox
          id="location"
          label="Location"
          noResultText="Can't find location"
          placeholder="Select a locatoin"
          options={makeMockArray("Location", 1000)}
        />
      </Flex>
    </Flex>
  );
}

const makeMockArray = (text: string, length: number = 100) => {
  return [...Array(length)].map((_, index) => ({
    label: `${text} - ${index}`,
    value: `${text} - ${index}`,
  }));
};
