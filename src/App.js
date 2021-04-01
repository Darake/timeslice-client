import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  theme,
  HStack,
  Input,
  Button,
  Stack,
  Container
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Task from './components/ScheduleView/Task';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:3000/tasks`)
      .then(res => {
        const tasks = res.data
        setTasks(tasks)
      })
  }, [])

  const handleCreateTask = () => {
    axios.post(`http://localhost:3000/tasks`, { name: newTask })
      .then(res => {
        setTasks(tasks.concat(res.data))
      })
  }

  console.log(tasks)

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <VStack minH="100vh" p={3} spacing={5}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Box spacing="10px">
            {tasks.map(task => <Task key={task.ID} taskName={task.Name} /> )}
          </Box>
          <VStack>
            <Input placeholder="New task" onChange={(e) => setNewTask(e.target.value)} />
            <Button colorScheme="teal" onClick={handleCreateTask}>
              Create task
            </Button>
          </VStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
