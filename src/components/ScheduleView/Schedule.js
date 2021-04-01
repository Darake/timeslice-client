import { Box } from '@chakra-ui/react'
import Slice from './Slice'

const ScheduleView = () => {
  return (
    <Box>
      <Slice timeRange="7-9" />
      <Slice timeRange="9-11" />
      <Slice timeRange="11-13" />
    </Box>
  )
}

export default ScheduleView