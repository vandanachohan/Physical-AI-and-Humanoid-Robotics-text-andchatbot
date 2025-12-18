// pages/api/search.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;

  // Sample textbook content for search
  const textbookContent = [
    {
      id: 1,
      sectionId: '1.1',
      title: 'Overview of Physical AI',
      content: 'Physical AI ( fizikal ai ) is an interdisciplinary field that combines artificial intelligence with physical systems. It focuses on creating intelligent machines that can understand, interact with, and adapt to the physical world. Step-by-step understanding: 1. Perception - Gathering information about the environment 2. Cognition - Processing information to understand and reason 3. Action - Executing movements or tasks in the physical world. Physical AI systems typically integrate sensors, actuators, and intelligent control algorithms to achieve their goals.'
    },
    {
      id: 2,
      sectionId: '1.2',
      title: 'History of Physical AI',
      content: 'The field of Physical AI has evolved significantly since the early days of robotics. Key developments include: 1950s: First programmable robots, 1960s: Introduction of sensor feedback systems, 1980s: Development of autonomous robots, 2000s: Integration of machine learning in robotics, 2010s: Advancement in humanoid robots and AI integration.'
    },
    {
      id: 3,
      sectionId: '3.1',
      title: 'Sensors in Robotics',
      content: 'Sensors in robotics function similarly to human senses, providing the robot with information about its environment and internal state. Common sensors include cameras, microphones, accelerometers, gyroscopes, force sensors, and tactile sensors. Proprioceptive sensors measure internal states like joint angles and motor position. Exteroceptive sensors perceive external environment, such as cameras for vision and microphones for sound. Force/torque sensors measure interaction forces with objects and environment.'
    },
    {
      id: 4,
      sectionId: '4.1',
      title: 'Actuators in Robotics',
      content: 'Actuators are components that enable robots to move and interact with their environment. They are essentially the "muscles" of a robot, converting energy (usually electrical) into mechanical motion. Electric motors are most common in humanoid robots due to their precision and controllability. Servo motors provide precise angular control for joint movements. Linear actuators create straight-line motion for specific applications.'
    },
    {
      id: 5,
      sectionId: '9.1',
      title: 'Motion Planning',
      content: 'Motion planning in robotics involves determining a sequence of movements to achieve a goal while avoiding obstacles. Step-by-step understanding: 1. Path planning - Calculate a geometric route from start to goal 2. Trajectory planning - Add timing and kinematic constraints to the path 3. Control execution - Send commands to actuators to follow the planned trajectory. Example: A humanoid robot planning to step over an obstacle calculates the required leg movement trajectory to avoid collision while maintaining balance.'
    }
  ];

  // Simple search implementation
  const results = textbookContent.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.content.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json({ results: results.slice(0, 3) }); // Return top 3 results
}