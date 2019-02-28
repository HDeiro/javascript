# Dates

JavaScript dates follows two date-patterns:

- RFC 2822: /WeekDay Month Day Year Hours:Minutes:Seconds Timezone/ 
    ```javascript
    Sat Mar 11 2017 23:49:32 GMD-0300
    ```

- ISO 8601: /Year-Month-DayTimezoneTimeZ/
    ```javascript
    1992-01-29T18:00:00.000Z
    ```

    Note: "Z" means [Zulu Time](https://www.timeanddate.com/time/zones/z). That's because the country of Zulu is located on GMT 0 and used as time reference.

The ways to declare a Date are:

- Object with instanciation moment as date
  ```javascript
  new Date();
  ```

- Object based on timestamp
  ```javascript
  new Date(1489284988987);
  ```

- Object based on String format (Always yyyy/MM/dd, hour is optional with format hh:mm:ss)
  ```javascript
  new Date("1992/01/29 15:00");
  ```

- Object based on parameters (year, month [from 0 to 11], day, hour, minute, second)
  ```javascript
  new Date(1992, 00, 29, 15, 0, 0);
  ```



