#!/usr/bin/env python3

import sys
import rospy
import keyboard
from std_msgs.msg import Int32MultiArray

def talker():        

    rospy.init_node('move_robot_car', anonymous=True)
    
    pub = rospy.Publisher("/robot_car/vel_cmd", Int32MultiArray, queue_size=10)          
    rate = rospy.Rate(60) # 60hz
    
    # for homework,you need to find which code to subscribe this message.
    wheel_vels = Int32MultiArray()
    #wheel_vels.data = [10, 10]
    
    while not rospy.is_shutdown():            
        
        try:
            '''if keyboard.read_key() == "d":
                wheel_vels.data = [10, 20]
            if keyboard.read_key() == "a":
                wheel_vels.data = [20, 10]
            else:
                wheel_vels.data = [10, 10]'''
            wheel_vels.data = [20, 10]
            print('hi')
            pub.publish(wheel_vels)
            rate.sleep()                
            
        except Exception as e:
            print(e)
            break
            
if __name__ == "__main__":    
    
    try:
        talker()
    except rospy.ROSInterrupException:
        pass

