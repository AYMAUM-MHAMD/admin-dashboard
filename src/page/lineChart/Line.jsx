import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";



const data = [
    
    {
      "id": "france",
      "color": "hsl(329, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 13
        },
        {
          "x": "helicopter",
          "y": 186
        },
        {
          "x": "boat",
          "y": 29
        },
        {
          "x": "train",
          "y": 116
        },
        {
          "x": "subway",
          "y": 224
        },
        {
          "x": "bus",
          "y": 117
        },
        {
          "x": "car",
          "y": 238
        },
        {
          "x": "moto",
          "y": 109
        },
        {
          "x": "bicycle",
          "y": 173
        },
        {
          "x": "horse",
          "y": 220
        },
        {
          "x": "skateboard",
          "y": 70
        },
        {
          "x": "others",
          "y": 193
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(15, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 155
        },
        {
          "x": "helicopter",
          "y": 61
        },
        {
          "x": "boat",
          "y": 164
        },
        {
          "x": "train",
          "y": 122
        },
        {
          "x": "subway",
          "y": 275
        },
        {
          "x": "bus",
          "y": 5
        },
        {
          "x": "car",
          "y": 215
        },
        {
          "x": "moto",
          "y": 121
        },
        {
          "x": "bicycle",
          "y": 267
        },
        {
          "x": "horse",
          "y": 113
        },
        {
          "x": "skateboard",
          "y": 58
        },
        {
          "x": "others",
          "y": 47
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(257, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 22
        },
        {
          "x": "helicopter",
          "y": 293
        },
        {
          "x": "boat",
          "y": 237
        },
        {
          "x": "train",
          "y": 67
        },
        {
          "x": "subway",
          "y": 171
        },
        {
          "x": "bus",
          "y": 242
        },
        {
          "x": "car",
          "y": 124
        },
        {
          "x": "moto",
          "y": 117
        },
        {
          "x": "bicycle",
          "y": 9
        },
        {
          "x": "horse",
          "y": 200
        },
        {
          "x": "skateboard",
          "y": 299
        },
        {
          "x": "others",
          "y": 221
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(176, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 86
        },
        {
          "x": "helicopter",
          "y": 70
        },
        {
          "x": "boat",
          "y": 118
        },
        {
          "x": "train",
          "y": 209
        },
        {
          "x": "subway",
          "y": 11
        },
        {
          "x": "bus",
          "y": 124
        },
        {
          "x": "car",
          "y": 40
        },
        {
          "x": "moto",
          "y": 184
        },
        {
          "x": "bicycle",
          "y": 125
        },
        {
          "x": "horse",
          "y": 75
        },
        {
          "x": "skateboard",
          "y": 235
        },
        {
          "x": "others",
          "y": 35
        }
      ]
    }
  ]

const Line = ({isDahboard = false}) => {
    const theme = useTheme()
  return (
    <Box sx={{height: isDahboard? "280px" : "75vh" }}>
    <ResponsiveLine
    theme={{
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "axis": {
            "domain": {
                "line": {
                    "stroke": theme.palette.divider,
                    "strokeWidth": 1
                }
            },
            "legend": {
                "text": {
                    "fontSize": 12,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "ticks": {
                "line": {
                    "stroke": theme.palette.divider,
                    "strokeWidth": 1
                },
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.secondary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "grid": {
            "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 0
            }
        },
        "legends": {
            "title": {
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "ticks": {
                "line": {},
                "text": {
                    "fontSize": 10,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "annotations": {
            "text": {
                "fontSize": 13,
                "fill": theme.palette.text.primary,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            }
        },
        "tooltip": {
            "container": {
                "background": theme.palette.background.default,
                "fontSize": 12
            },
            "basic": {},
            "chip": {},
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
        }
    }}
        data={data}
        curve='catmullRom'
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDahboard? null : 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDahboard? null : 'Count',
            legendOffset: -45,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  </Box>
  );
};
export default Line;