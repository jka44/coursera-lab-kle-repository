import datetime
from zoneinfo import ZoneInfo
from google.adk.agents import Agent
from google.adk.tools.mcp_tool.mcp_toolset import MCPToolset, StdioServerParameters

root_agent = Agent(
    name="wismo_agent",
    model="gemini-2.0-flash",
    description=(
        "Agent to answer where is the customer order"
    ),
    instruction=(
        "You are a helpful agent who can answer user questions to help them getting their order status"
    ),
    tools=[
        MCPToolset(connection_params=StdioServerParameters(
            command='node', args=["/Users/pierrelechanu2/dev/iadvize/local/agentic-ai-mcp"], env={}))
    ],
)
