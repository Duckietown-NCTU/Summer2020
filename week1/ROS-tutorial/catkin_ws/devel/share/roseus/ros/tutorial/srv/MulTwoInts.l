;; Auto-generated. Do not edit!


(when (boundp 'tutorial::MulTwoInts)
  (if (not (find-package "TUTORIAL"))
    (make-package "TUTORIAL"))
  (shadow 'MulTwoInts (find-package "TUTORIAL")))
(unless (find-package "TUTORIAL::MULTWOINTS")
  (make-package "TUTORIAL::MULTWOINTS"))
(unless (find-package "TUTORIAL::MULTWOINTSREQUEST")
  (make-package "TUTORIAL::MULTWOINTSREQUEST"))
(unless (find-package "TUTORIAL::MULTWOINTSRESPONSE")
  (make-package "TUTORIAL::MULTWOINTSRESPONSE"))

(in-package "ROS")





(defclass tutorial::MulTwoIntsRequest
  :super ros::object
  :slots (_a _b ))

(defmethod tutorial::MulTwoIntsRequest
  (:init
   (&key
    ((:a __a) 0)
    ((:b __b) 0)
    )
   (send-super :init)
   (setq _a (round __a))
   (setq _b (round __b))
   self)
  (:a
   (&optional __a)
   (if __a (setq _a __a)) _a)
  (:b
   (&optional __b)
   (if __b (setq _b __b)) _b)
  (:serialization-length
   ()
   (+
    ;; int32 _a
    4
    ;; int32 _b
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int32 _a
       (write-long _a s)
     ;; int32 _b
       (write-long _b s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int32 _a
     (setq _a (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _b
     (setq _b (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(defclass tutorial::MulTwoIntsResponse
  :super ros::object
  :slots (_multiply ))

(defmethod tutorial::MulTwoIntsResponse
  (:init
   (&key
    ((:multiply __multiply) 0)
    )
   (send-super :init)
   (setq _multiply (round __multiply))
   self)
  (:multiply
   (&optional __multiply)
   (if __multiply (setq _multiply __multiply)) _multiply)
  (:serialization-length
   ()
   (+
    ;; int32 _multiply
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int32 _multiply
       (write-long _multiply s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int32 _multiply
     (setq _multiply (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(defclass tutorial::MulTwoInts
  :super ros::object
  :slots ())

(setf (get tutorial::MulTwoInts :md5sum-) "567275aed315c9c2bd3343c0131cda00")
(setf (get tutorial::MulTwoInts :datatype-) "tutorial/MulTwoInts")
(setf (get tutorial::MulTwoInts :request) tutorial::MulTwoIntsRequest)
(setf (get tutorial::MulTwoInts :response) tutorial::MulTwoIntsResponse)

(defmethod tutorial::MulTwoIntsRequest
  (:response () (instance tutorial::MulTwoIntsResponse :init)))

(setf (get tutorial::MulTwoIntsRequest :md5sum-) "567275aed315c9c2bd3343c0131cda00")
(setf (get tutorial::MulTwoIntsRequest :datatype-) "tutorial/MulTwoIntsRequest")
(setf (get tutorial::MulTwoIntsRequest :definition-)
      "int32 a
int32 b
---
int32 multiply

")

(setf (get tutorial::MulTwoIntsResponse :md5sum-) "567275aed315c9c2bd3343c0131cda00")
(setf (get tutorial::MulTwoIntsResponse :datatype-) "tutorial/MulTwoIntsResponse")
(setf (get tutorial::MulTwoIntsResponse :definition-)
      "int32 a
int32 b
---
int32 multiply

")



(provide :tutorial/MulTwoInts "567275aed315c9c2bd3343c0131cda00")


