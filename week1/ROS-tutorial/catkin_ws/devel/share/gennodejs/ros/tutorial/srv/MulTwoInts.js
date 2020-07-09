// Auto-generated. Do not edit!

// (in-package tutorial.srv)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------


//-----------------------------------------------------------

class MulTwoIntsRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.a = null;
      this.b = null;
    }
    else {
      if (initObj.hasOwnProperty('a')) {
        this.a = initObj.a
      }
      else {
        this.a = 0;
      }
      if (initObj.hasOwnProperty('b')) {
        this.b = initObj.b
      }
      else {
        this.b = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type MulTwoIntsRequest
    // Serialize message field [a]
    bufferOffset = _serializer.int32(obj.a, buffer, bufferOffset);
    // Serialize message field [b]
    bufferOffset = _serializer.int32(obj.b, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type MulTwoIntsRequest
    let len;
    let data = new MulTwoIntsRequest(null);
    // Deserialize message field [a]
    data.a = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [b]
    data.b = _deserializer.int32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 8;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tutorial/MulTwoIntsRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ef8322123148e475e3e93a1f609b2f70';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 a
    int32 b
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new MulTwoIntsRequest(null);
    if (msg.a !== undefined) {
      resolved.a = msg.a;
    }
    else {
      resolved.a = 0
    }

    if (msg.b !== undefined) {
      resolved.b = msg.b;
    }
    else {
      resolved.b = 0
    }

    return resolved;
    }
};

class MulTwoIntsResponse {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.multiply = null;
    }
    else {
      if (initObj.hasOwnProperty('multiply')) {
        this.multiply = initObj.multiply
      }
      else {
        this.multiply = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type MulTwoIntsResponse
    // Serialize message field [multiply]
    bufferOffset = _serializer.int32(obj.multiply, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type MulTwoIntsResponse
    let len;
    let data = new MulTwoIntsResponse(null);
    // Deserialize message field [multiply]
    data.multiply = _deserializer.int32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 4;
  }

  static datatype() {
    // Returns string type for a service object
    return 'tutorial/MulTwoIntsResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6beb9d0eae755804051c303fd583c637';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 multiply
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new MulTwoIntsResponse(null);
    if (msg.multiply !== undefined) {
      resolved.multiply = msg.multiply;
    }
    else {
      resolved.multiply = 0
    }

    return resolved;
    }
};

module.exports = {
  Request: MulTwoIntsRequest,
  Response: MulTwoIntsResponse,
  md5sum() { return '567275aed315c9c2bd3343c0131cda00'; },
  datatype() { return 'tutorial/MulTwoInts'; }
};
