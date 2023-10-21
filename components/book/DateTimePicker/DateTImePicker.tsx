import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './datetimepicker.styles'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

const DateTIme = () => {
  // TODO: When sending as a request to backend, time should be changed to time.getTIme()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState<Date | undefined>(new Date())
  const [show, setShow] = useState(false)
  const [mode, setMode] = useState<'date' | 'time'>('date')

  const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    const currentDate = selectedDate
    setShow(false)
    if (mode === 'date') {
      setDate(currentDate)
    } else {
      setTime(currentDate)
    }
  }

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatePicker = () => showMode('date')
  const showTimePicker = () => showMode('time')

  return (
    <View>
      <Text style={styles.booking_time_header}>book a time for your session</Text>
      <View style={{ flexDirection: 'row', columnGap: 37 }}>
        <Pressable onPress={showTimePicker} style={styles.dateTimePickerContainer}>
          <AntDesign name="clockcircleo" size={15} color="#000" />
          <Text style={styles.datePicker_text}>select preferred time</Text>
        </Pressable>
        <Pressable onPress={showDatePicker} style={styles.dateTimePickerContainer}>
          <AntDesign name="clockcircleo" size={15} color="#000" />
          <Text style={styles.datePicker_text}>select preferred date</Text>
        </Pressable>
      </View>

      {show && (
        <DateTimePicker
          testID="datetime"
          value={mode === 'date' ? date! : time!}
          mode={mode}
          // is24Hour
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
    </View>
  )
}

export default DateTIme
