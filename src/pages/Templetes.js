import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Input from "../components/authentication/Input";
import Output from "../components/authentication/Output";

const Templetes = () =>{
    return(
        <Tabs variant='unstyled' style={{marginTop:'20px'}}>
                    <TabList style={{height:'40px'}}>
                        <Tab _selected={{ color: 'white', bg: '#12B5B0' }} style={{width:'683px',}}><b>Input</b></Tab>
                        <Tab _selected={{ color: 'white', bg: '#12B5B0' }} style={{width:'683px'}}><b>Output</b></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Input/>
                        </TabPanel>
                        <TabPanel>
                            <Output/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
    )
}

export default Templetes