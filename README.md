# Known Bugs


1. A search for "Galsworthy" should bring up 240 Galsworthy Ct but it doesn't. A search for "alsworthy" works great! Plug a "g" or a "G" into the beginning of that and it fails. We don't really know why this happens because it works fine on the MySQL server.
    
2. You can't use abbreviations for Street Suffixes yet. If you're looking for Houze Rd, you must type in Houze Road and not "Rd."

3. The back button and the UI don't always sync up. This is because of a conflict between the HTML History API and React Router 4. This will be fixed in version 4.2.1
