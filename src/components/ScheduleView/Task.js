import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react"

const Task = ({ taskName }) => {
  return (
    <Tag colorScheme="green" ml={2}>
      <TagLabel>{taskName}</TagLabel>
      <TagCloseButton />
    </Tag>
  )
}

export default Task