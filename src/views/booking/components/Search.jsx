import {
  Box,
  Tab,
  TabPanel,
  TabPanels,
  Flex,
  Tabs,
  Text,
  TabList,
  FormControl,
  Input,
  Button,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { ArrowBackIcon, ArrowForwardIcon,AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Search = () => {
  const [date, setDate] = useState("");

  const handleInputFocus = (event) => {
    event.target.type = "date";
    event.target.focus();
  };

  return (
    <Box>
      <Box>
        <Text fontSize="3xl">Hello There</Text>
        <Text fontSize="3xl">
          Book cheap flights with your one-stop travel shop!
        </Text>
      </Box>
      <Box>
        <Tabs>
          <TabList>
            <Tab>Return</Tab>
            <Tab>One-way</Tab>
            <Tab>Multi-city</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex
                minWidth="max-content"
                alignItems="center"
                position="relative"
              >
                <FormControl>
                  <Flex
                    direction={{ base: "column", md: "row", sm: "column" }}
                  
                    gap={{ base: "10px", md: "0px" }}
                  >
                    <Input placeholder="From" />
                    
                    {/* <Button
                      borderRadius="100%"
                      border="2"
                      position="absolute"
                      top="0px"
                      left="251px"
                      bgColor="white"
                      colorScheme="#ffffff"
                      zIndex="7"
                    >
                      <Flex direction="column">
                        <ArrowForwardIcon color="#cccccc"/>
                        <ArrowBackIcon color="#cccccc"/>
                      </Flex>
                    </Button> */}
                    <Input placeholder="To" />

                    <Input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      onFocus={handleInputFocus}
                      placeholder="Departure"
                      size="md"
                      type="text"
                    />

                    <Input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      onFocus={handleInputFocus}
                      placeholder="Return"
                      size="md"
                      type="text"
                     
                    />

                    
                  </Flex>
                  <Flex>
                    <Button borderRadius="2px" colorScheme="blue" mx="auto" marginTop="10">
                      Search Flight
                    </Button>
                  </Flex>
                </FormControl>
              </Flex>
            </TabPanel>
            <TabPanel>
            <Flex
                minWidth="max-content"
                alignItems="center"
                position="relative"
              >
                <FormControl>
                  <Flex
                    direction={{ base: "column", md: "row", sm: "column" }}
                  
                    gap={{ base: "10px", md: "0px" }}
                  >
                    <Input placeholder="From" />
                    
                    {/* <Button
                      borderRadius="100%"
                      border="2"
                      position="absolute"
                      top="0px"
                      left="251px"
                      bgColor="white"
                      colorScheme="#ffffff"
                      zIndex="7"
                    >
                      <Flex direction="column">
                        <ArrowForwardIcon color="#cccccc"/>
                        <ArrowBackIcon color="#cccccc"/>
                      </Flex>
                    </Button> */}
                    <Input placeholder="To" />

                    <Input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      onFocus={handleInputFocus}
                      placeholder="Departure"
                      size="md"
                      type="text"
                    />

                   

                    
                  </Flex>
                  <Flex>
                    <Button borderRadius="2px" colorScheme="blue" mx="auto" marginTop="10">
                      Search Flight
                    </Button>
                  </Flex>
                </FormControl>
              </Flex>
            </TabPanel>
            <TabPanel>
             <Flex
                minWidth="max-content"
                alignItems="center"
                position="relative"
              >
                <FormControl>
                  <Flex
                    direction={{ base: "column", md: "row", sm: "column" }}
                  
                    gap={{ base: "10px", md: "0px" }}
                  >
                    <Input placeholder="From" />
                    
                    {/* <Button
                      borderRadius="100%"
                      border="2"
                      position="absolute"
                      top="0px"
                      left="251px"
                      bgColor="white"
                      colorScheme="#ffffff"
                      zIndex="7"
                    >
                      <Flex direction="column">
                        <ArrowForwardIcon color="#cccccc"/>
                        <ArrowBackIcon color="#cccccc"/>
                      </Flex>
                    </Button> */}
                    <Input placeholder="To" />

                    <Input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      onFocus={handleInputFocus}
                      placeholder="Departure"
                      size="md"
                      type="text"
                    /> 
                  </Flex>
                  <Flex mt="10">
                    <Button borderRadius="2px" colorScheme="blue" leftIcon={<AddIcon />} variant='outline'>
                    Add Flight
                    </Button>
                    <Spacer />
                    <Button borderRadius="2px" colorScheme="blue" >
                    Search Flight
                    </Button>
                  </Flex>
                </FormControl>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Search;
