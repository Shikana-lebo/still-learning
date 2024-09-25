name = input("Please enter your name : ")
count_name_characters = len(name)

if count_name_characters<3:
    print("Error!!!Name must be at least 3 characters")
elif count_name_characters>50:
    print("Name can be a maximum of 50 characters")
else:
    print("Name looks good")