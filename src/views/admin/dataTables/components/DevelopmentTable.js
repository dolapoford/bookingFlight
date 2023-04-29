/* eslint-disable */
import {
  Flex,
  Progress,
  Table,
  Tbody,
  Td,
  Icon,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import { AndroidLogo, AppleLogo, WindowsLogo } from "components/icons/Icons";
import { MdCheckCircle, MdCancel, MdOutlineError,MdOutlineEditCalendar } from "react-icons/md";
import Menu from "components/menu/MainMenu";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

export default function DevelopmentTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("secondaryGray.500", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
      direction='column'
      w='100%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex px='25px' justify='space-between' mb='20px' align='center'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'>
         Booking List
        </Text>
        <Menu />
      </Flex>
      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "ID") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "TYPE") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } 
                  else if (cell.column.Header === "BOOKING DATE") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  }
                  else if (cell.column.Header === "JOURNEY DATE") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } 
                  else if (cell.column.Header === "STATUS") {
                    data = (
                      <Flex align='center'>
                         <Icon
                          w='24px'
                          h='24px'
                          me='5px'
                          color={
                            cell.value === "Completed"
                              ? "green.500"
                              : cell.value === "Cancel"
                              ? "red.500"
                              : cell.value === "Miss"
                              ? "orange.500"
                              : cell.value === "Reschedule"
                              ?"#D3E60B"
                              :null
                          }
                          as={
                            cell.value === "Completed"
                              ? MdCheckCircle
                              : cell.value === "Cancel"
                              ? MdCancel
                              : cell.value === "Miss"
                              ? MdOutlineError
                              : cell.value === "Reschedule"
                              ?MdOutlineEditCalendar
                              :null
                          }
                        />
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value}
                        </Text>
                      </Flex>
                    );
                  }
                  else if (cell.column.Header === "TRAVELLER") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  }
                  else if (cell.column.Header === "AMOUNT") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  }
                  else if (cell.column.Header === "PAYMENT TYPE") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  }else if (cell.column.Header === "PROGRESS") {
                    data = (
                      <Flex align='center'>
                        <Text
                          me='10px'
                          color={textColor}
                          fontSize='sm'
                          fontWeight='700'>
                          {cell.value}%
                        </Text>
                        <Progress
                          variant='table'
                          colorScheme='brandScheme'
                          h='8px'
                          w='63px'
                          value={cell.value}
                        />
                      </Flex>
                    );
                  }
                  else if (cell.column.Header === "TECH") {
                    data = (
                      <Flex align='center'>
                        {cell.value.map((item, key) => {
                          if (item === "apple") {
                            return (
                              <AppleLogo
                                key={key}
                                color={iconColor}
                                me='16px'
                                h='18px'
                                w='15px'
                              />
                            );
                          } else if (item === "android") {
                            return (
                              <AndroidLogo
                                key={key}
                                color={iconColor}
                                me='16px'
                                h='18px'
                                w='16px'
                              />
                            );
                          } else if (item === "windows") {
                            return (
                              <WindowsLogo
                                key={key}
                                color={iconColor}
                                h='18px'
                                w='19px'
                              />
                            );
                          }
                        })}
                      </Flex>
                    );
                  } 
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor='transparent'>
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
