import { Box, Flex } from "@chakra-ui/react"

const Slice = ({ timeRange }) => {
  return (
    <Box borderBottom="1px" borderColor="gray.200">
      <Flex>
        <Box borderRight="1px" borderColor="gray.200" pr={3} >
          {timeRange}
        </Box>
        <Box pl={3}>
          task, task task
        </Box>
      </Flex>
    </Box>
  )  
}

export default Slice
