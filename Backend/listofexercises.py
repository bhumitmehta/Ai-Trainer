# import cv2
# import mediapipe as mp
# import numpy as np
# import math

# def calculate_angle(a, b, c):
#     a = np.array(a)  # First
#     b = np.array(b)  # Mid
#     c = np.array(c)  # End
#     radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
#     angle = np.abs(radians * 180.0 / np.pi)
#     if angle > 180.0:
#         angle = 360 - angle
#     return angle

# def calculate_distance(x1, y1, x2, y2):
#     return math.hypot(x2 - x1, y2 - y1)

# def bicep_curl_left(results,mp_pose):
#     landmarks = results.pose_landmarks.landmark
#     shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
#     elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x,landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
#     wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x,landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]
#     angle = calculate_angle(shoulder, elbow, wrist)
#     return angle,elbow

# def bicep_curl_right(results,mp_pose):
#     landmarks = results.pose_landmarks.landmark
#     shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x,landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
#     elbow = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x,landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
#     wrist = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x,landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]
#     angle = calculate_angle(shoulder, elbow, wrist)
#     return angle,elbow

# def shoulder_press(results,mp_pose):
#     landmarks = results.pose_landmarks.landmark
#     shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x, 
#                         landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
#     elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x, 
#                      landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
#     wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x, 
#                      landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]
            
#     angle = calculate_angle(shoulder, elbow, wrist)
#     return angle,elbow

# def pushup(results,mp_pose):
#     landmarks = results.pose_landmarks.landmark
#     left_shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
#     left_elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x,landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
#     left_wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x,landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]
#     right_shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x,landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
#     right_elbow = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x,landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
#     right_wrist = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x,landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]
#     angle = (calculate_angle(left_shoulder, left_elbow, left_wrist) + calculate_angle(right_shoulder, right_elbow, right_wrist))/2
#     return angle,left_elbow

# def squats(results,mp_pose):
#     landmarks = results.pose_landmarks.landmark
#     hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
#     knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
#     ankle = [landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y]
#     angle = calculate_angle(hip,knee,ankle)
#     return angle,knee

# def lungesleft(results,mp_pose):
#     landmarks = results.pose_landmarks.landmark
#     hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
#     knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
#     ankle = [landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y]
#     angle = calculate_angle(hip, knee, ankle)
#     return angle, knee
# def lungesright(results,mp_pose):
#     landmarks = results.pose_landmarks.landmark
#     hip = [landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].y]
#     knee = [landmarks[mp_pose.PoseLandmark.RIGHT_KNEE.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_KNEE.value].y]
#     ankle = [landmarks[mp_pose.PoseLandmark.RIGHT_ANKLE.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_ANKLE.value].y]
#     angle = calculate_angle(hip, knee, ankle)
#     return angle, knee
    
# def jumping_jack(results,mp_pose, h, w):
#     landmarks = results.pose_landmarks.landmark
#     right_foot = [landmarks[mp_pose.PoseLandmark.RIGHT_FOOT_INDEX.value].x * w, landmarks[mp_pose.PoseLandmark.RIGHT_FOOT_INDEX.value].y * h]
#     left_foot = [landmarks[mp_pose.PoseLandmark.LEFT_FOOT_INDEX.value].x * w, landmarks[mp_pose.PoseLandmark.LEFT_FOOT_INDEX.value].y * h]
#     right_hand = [landmarks[mp_pose.PoseLandmark.RIGHT_INDEX.value].x * w, landmarks[mp_pose.PoseLandmark.RIGHT_INDEX.value].y * h]
#     left_hand = [landmarks[mp_pose.PoseLandmark.LEFT_INDEX.value].x * w, landmarks[mp_pose.PoseLandmark.LEFT_INDEX.value].y * h]
#     distance_hand = calculate_distance(right_hand[0], right_hand[1], left_hand[0], left_hand[1])
#     distance_feet = calculate_distance(right_foot[0], right_foot[1], left_foot[0], left_foot[1])

#     return distance_hand,distance_feet

# def high_knees(results,mp_pose):
#     landmarks = results.pose_landmarks.landmark
#     hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
#     knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
#     ankle = [landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y]
#     angle = calculate_angle(hip, knee, ankle)
#     return angle,knee

# def situps(results,mp_pose):
#     landmarks = results.pose_landmarks.landmark
#     hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x,
#             landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
#     shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,
#                 landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
#     knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x,
#             landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
#     angle = calculate_angle(shoulder, hip, knee)
#     return angle, knee

# def plank(results,mp_pose):
#     landmarks = results.pose_landmarks.landmark
#     left_shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
#     left_elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x,landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
#     left_wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x,landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]
#     right_shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x,landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
#     right_elbow = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x,landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
#     right_wrist = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x,landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]
#     angle = (calculate_angle(left_shoulder, left_elbow, left_wrist) + calculate_angle(right_shoulder, right_elbow, right_wrist))/2
#     return angle,left_elbow

# def frog_press(results, mp_pose):
#     landmarks = results.pose_landmarks.landmark
#     hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x,
#             landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
#     knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x,
#             landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
#     ankle = [landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x,
#                 landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y]
#     angle = calculate_angle(hip, knee, ankle)
#     return angle, knee

# modified  code
import cv2
import mediapipe as mp
import numpy as np
import math

def calculate_angle(a, b, c):
    a = np.array(a)  # First
    b = np.array(b)  # Mid
    c = np.array(c)  # End
    radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
    angle = np.abs(radians * 180.0 / np.pi)
    if angle > 180.0:
        angle = 360 - angle
    return angle

def calculate_distance(x1, y1, x2, y2):
    return math.hypot(x2 - x1, y2 - y1)

def bicep_curl_left(results, mp_pose):
    landmarks = results.pose_landmarks.landmark
    shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
    elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
    wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x, landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]
    angle = calculate_angle(shoulder, elbow, wrist)
    
    # Check if posture is correct
    # For bicep curl, we want the angle to be either < 30 (up) or > 160 (down)
    is_correct = (angle < 30) or (angle > 160)
    feedback = "Good form" if is_correct else "Adjust your arm angle"
    
    return angle, elbow, is_correct, feedback

def bicep_curl_right(results, mp_pose):
    landmarks = results.pose_landmarks.landmark
    shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
    elbow = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
    wrist = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]
    angle = calculate_angle(shoulder, elbow, wrist)
    
    # Check if posture is correct
    is_correct = (angle < 30) or (angle > 160)
    feedback = "Good form" if is_correct else "Adjust your arm angle"
    
    return angle, elbow, is_correct, feedback

def shoulder_press(results, mp_pose):
    landmarks = results.pose_landmarks.landmark
    shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
    elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
    wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x, landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]
            
    angle = calculate_angle(shoulder, elbow, wrist)
    
    # For shoulder press, we want the angle to be either < 50 (down) or > 160 (up)
    is_correct = (angle < 50) or (angle > 160)
    feedback = "Good form" if is_correct else "Adjust your arm position"
    
    return angle, elbow, is_correct, feedback

def pushup(results, mp_pose):
    landmarks = results.pose_landmarks.landmark
    left_shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
    left_elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
    left_wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x, landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]
    right_shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
    right_elbow = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
    right_wrist = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]
    angle = (calculate_angle(left_shoulder, left_elbow, left_wrist) + calculate_angle(right_shoulder, right_elbow, right_wrist))/2
    
    # For pushup, we want the angle to be either < 70 (down) or > 160 (up)
    is_correct = (angle < 70) or (angle > 160)
    feedback = "Good form" if is_correct else "Keep your arms aligned properly"
    
    return angle, left_elbow, is_correct, feedback

def squats(results, mp_pose):
    landmarks = results.pose_landmarks.landmark
    hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
    knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
    ankle = [landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y]
    angle = calculate_angle(hip, knee, ankle)
    
    # For squats, we want the angle to be either < 90 (down) or > 160 (up)
    is_correct = (angle < 90) or (angle > 160)
    feedback = "Good form" if is_correct else "Adjust your squat depth"
    
    return angle, knee, is_correct, feedback

def lungesleft(results, mp_pose):
    landmarks = results.pose_landmarks.landmark
    hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
    knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
    ankle = [landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y]
    angle = calculate_angle(hip, knee, ankle)
    
    # For lunges, we want the angle to be either < 90 (down) or > 160 (up)
    is_correct = (angle < 90) or (angle > 160)
    feedback = "Good form" if is_correct else "Adjust your lunge depth"
    
    return angle, knee, is_correct, feedback

def lungesright(results, mp_pose):
    landmarks = results.pose_landmarks.landmark
    hip = [landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].y]
    knee = [landmarks[mp_pose.PoseLandmark.RIGHT_KNEE.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_KNEE.value].y]
    ankle = [landmarks[mp_pose.PoseLandmark.RIGHT_ANKLE.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_ANKLE.value].y]
    angle = calculate_angle(hip, knee, ankle)
    
    # For lunges, we want the angle to be either < 90 (down) or > 160 (up)
    is_correct = (angle < 90) or (angle > 160)
    feedback = "Good form" if is_correct else "Adjust your lunge depth"
    
    return angle, knee, is_correct, feedback
    
def jumping_jack(results, mp_pose):
    landmarks = results.pose_landmarks.landmark
    
    # Fix the error in the original function - remove h, w parameters that aren't used correctly
    right_foot = [landmarks[mp_pose.PoseLandmark.RIGHT_FOOT_INDEX.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_FOOT_INDEX.value].y]
    left_foot = [landmarks[mp_pose.PoseLandmark.LEFT_FOOT_INDEX.value].x, landmarks[mp_pose.PoseLandmark.LEFT_FOOT_INDEX.value].y]
    right_hand = [landmarks[mp_pose.PoseLandmark.RIGHT_INDEX.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_INDEX.value].y]
    left_hand = [landmarks[mp_pose.PoseLandmark.LEFT_INDEX.value].x, landmarks[mp_pose.PoseLandmark.LEFT_INDEX.value].y]
    
    # Calculate distance without multiplying by h, w
    distance_hand = calculate_distance(right_hand[0], right_hand[1], left_hand[0], left_hand[1])
    distance_feet = calculate_distance(right_foot[0], right_foot[1], left_foot[0], left_foot[1])
    
    # For jumping jacks, we want distance to be either high (hands/feet apart) or low (hands/feet together)
    is_correct = (distance_hand > 0.3) or (distance_hand < 0.1)
    feedback = "Good form" if is_correct else "Spread your hands more"
    
    return distance_hand, distance_feet, is_correct, feedback

def high_knees(results, mp_pose):
    landmarks = results.pose_landmarks.landmark
    hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
    knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
    ankle = [landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y]
    angle = calculate_angle(hip, knee, ankle)
    
    # For high knees, we want the angle to be either < 90 (up) or > 160 (down)
    is_correct = (angle < 90) or (angle > 160)
    feedback = "Good form" if is_correct else "Lift your knees higher"
    
    return angle, knee, is_correct, feedback

def situps(results, mp_pose):
    landmarks = results.pose_landmarks.landmark
    hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
    shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
    knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
    angle = calculate_angle(shoulder, hip, knee)
    
    # For situps, we want the angle to be either < 100 (up) or > 160 (down)
    is_correct = (angle < 100) or (angle > 160)
    feedback = "Good form" if is_correct else "Adjust your situp position"
    
    return angle, knee, is_correct, feedback

def plank(results, mp_pose):
    landmarks = results.pose_landmarks.landmark
    left_shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
    left_elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
    left_wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x, landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]
    right_shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
    right_elbow = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
    right_wrist = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]
    angle = (calculate_angle(left_shoulder, left_elbow, left_wrist) + calculate_angle(right_shoulder, right_elbow, right_wrist))/2
    
    # For plank, we want the angle to be between 70 and 110 degrees (straight arms)
    is_correct = (angle > 70) and (angle < 110)
    feedback = "Good plank form" if is_correct else "Keep your arms steady"
    
    return angle, left_elbow, is_correct, feedback

def frog_press(results, mp_pose):
    landmarks = results.pose_landmarks.landmark
    hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
    knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
    ankle = [landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y]
    angle = calculate_angle(hip, knee, ankle)
    
    # For frog press, we want the angle to be either < 70 (down) or > 160 (up)
    is_correct = (angle < 70) or (angle > 160)
    feedback = "Good form" if is_correct else "Adjust your leg position"
    
    return angle, knee, is_correct, feedback