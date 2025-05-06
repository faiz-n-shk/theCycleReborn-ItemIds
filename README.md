# TheCycleReborn-ItemIds
Item id's for most stuff in the cycle reborn, update/add stuff to you inventory using mongoDB, tutorial below and also on the webpage.

# Webpage:
You can search and find whatever item you want to add directly from the webpage, and there is also a tutorial video provided, you can also use the [Guide to Modifying Stats and Inventory in MongoDB](#guide-to-modifying-stats-and-inventory-in-mongodb).

[Click here to open Webpage](https://faiz-n-shk.github.io/theCycleReborn-ItemIds/)

# Current progress:
images for the items are yet to be added,
its a lengthy process to add images manually for all items, so do not keep expectations pls :)

# Credits:
credits to members of ReCycle Project community to provide much needed data, thx a lot, and @MONKES_On_Twitch for the tutorial,
link to @MONKES_On_Twitch's [Youtube Channel](https://www.youtube.com/@monkes_on_twitch/featured)
> The tutorial is present on the [WebPage](https://faiz-n-shk.github.io/theCycleReborn-ItemIds/)



# Guide to Modifying Stats and Inventory in MongoDB

> **WARNING:** This can only be done after you have set up and successfully played _The Cycle: Frontier_ with the local server running.

---

## Prep Work for Modifying Stats

1. **Open MongoDB.**
2. Click **"Add New Connection"**.
3. In the **Name Box**, type any name (e.g., `123`), it would even work if you don't type any name do not worry.
4. Click **Save and Connect**.
5. On the left side of MongoDB, you should now see a small **Laptop Icon** with the name you entered (or if no name was entered it would say `localhost`). Underneath that, there should be multiple drop-down menus. Click on **ProspectDb**.
6. Below **ProspectDb**, three new options should appear with **Folder Icons** next to them. Click **PlayFabUserData**.
   - **PlayFabUserData** holds all the user characteristics from _The Cycle: Frontier_. This includes:
     - Vendor Levels
     - Aurum Totals
     - K-Mark Totals
     - Current character equipment
     - Fortuna Pass Level
     - And much more.
7. In the center of MongoDB, a bunch of data fields should pop up. Look for the **"Key"** field when scrolling through them.
   - For example: The first data entry should be **"FactionProgressKorolev"**, which represents your total XP gained within Korolev.
   - There are two pages of these data entries that you can scroll through.

---

## Modifying Faction Level

1. To modify your XP gained with the factions:
   - Select the data entry of the faction you want to modify (e.g., **"FactionProgressKorolev"**).
   - Click the **pencil icon** on the right side of the data entry to edit the information.
2. In the **Value Field**, replace the `0` with `450000`.
   - This will set your level with that faction to **20** in the game.
   - **Note:** Make sure to type within the quotation marks and do not include commas in the number.
3. After modifying the value:
   - Look to the right of the data entry and click the **Update icon**.
   - The field should now be updated in the database.
4. If you want to modify all faction levels, repeat these steps for each faction.

---

## Modifying Currency

1. With the data entries in the center of MongoDB, there should be an **arrow button** above the entries and to the right that will take you to the second page. Click that button.
2. Scroll down until you find the data entry with the **Key** named **"Balance"**. Select this entry and press the **pencil icon** on the right to edit.
3. In the **Value Field**, there should be 3 items in quotations:
   - **"IN"** (Insurance Tokens)
   - **"AU"** (Aurum)
   - **"SC"** (K-Marks)  
     Modify these values to any amount you desire. Replace the number that is there with the quantity you wish to have for each currency.
4. When finished, press **Update** on the right of that data entry.

---

## Modifying Inventory

> **WARNING:** Modifying your inventory incorrectly can cause the game not to load anymore!  
> **SECOND WARNING:** Only add 1 new item to the game at a time. Make sure to restart the game after every change to ensure it worked.

1. Within the second page of data entries in MongoDB, there should be an entry with the **Key** **"Inventory"**. Select this entry and click the **pencil icon** on the right to edit.
2. The **Value** section of this entry is very large and difficult to edit in MongoDB. To easily make changes:
   - Select everything within the **Value** section of the entry.
     - This can be done by highlighting the brackets before the words `ItemId` and moving your mouse to the right, or by clicking somewhere within the value text box and pressing **CTRL + A** to highlight it all.
   - Right-click and **Copy** or press **CTRL + C** to copy the text.
   - Paste it into 2 separate text documents.
     - Open the program **Notepad** twice.
     - Right-click in one of the text documents and click **Paste**. Do this with both text documents.
3. Save one of the text documents to your desktop under the name **Inventory Backup**.
   - This is just in case something doesn’t work right and you need to go back.
   - You may close the **Inventory Backup** for now. Leave the other text document open.
4. Within the text document, you should see a long list of entries that look something like this:

   ```json
   {"itemId":"54a11e06-64cb-4c84-911c-4871946db2e6","baseItemId":"WP_E_SMG_Bullet_01","primaryVanityId":0,"secondaryVanityId":0,"amount":2,"durability":-1,"modData":{"m":[]},"rolledPerks":[],"insurance":"","insuranceOwnerPlayfabId":"9FB23FAB0D2EC5AB","insuredAttachmentId":"","origin":{"t":"","p":"","g":""}},
   ```

5. Break these entries down into sections:

   - **"ItemId"**
   - **"baseItemId"**
   - **"amount"**  
     These are the only values you will need to modify.

6. To add a new weapon to your stash:

   - Copy an inventory entry (e.g., one with a `baseItemId` that starts with `WP`).
     - When copying an inventory entry, do not include the starting square bracket `[` in the selection.
     - Start selecting the entry from the `{` bracket before `"ItemId"` and select all the way to the comma before the same bracket of another inventory entry.
   - Paste it between the square bracket `[` and the other bracket `{` at the start of the inventory list.

7. Modify the **"ItemId"**:

   - Change a single letter or number within the string of letters and numbers under the `"ItemId"` section.
     - For example: `"itemId":"54a11e06-64cb-4c84-911c-4871946db2e6"`  
       Change the `5` at the start of the `ItemId` to a `4`, making it look like this:  
       `"itemId":"44a11e06-64cb-4c84-911c-4871946db2e6"`

   > **Note:** If you add more than one item, make sure to change a different number/letter for every new item.

8. Modify the **"baseItemId"**:

   - Replace the `baseItemId` with any weapon ID from the list below.
     - **DO NOT COPY THE NAME NEXT TO THE WEAPON ID.** That is just there so you know what weapon you are adding.

   ```plaintext
   WP_E_Launch_Nade_01        FF4Detonator
   WP_A_Launch_MSL_01        Komrad
   WP_A_Sniper_Gauss_01        Karma
   WP_A_HVY_Shell_01        Karla
   WP_D_HVY_Exotic_01        Haze
   WP_G_HVY_Beam_01        Zeus
   ...
   ```

9. To add any other piece of equipment into your stash, repeat steps 7 and 8.

   - For armors or helmets, ensure the **durability** value is correct. Replace `durability: -1` with the correct armor value.
   - Modify the **amount** section for items such as ammo, stims, and other consumables.

10. After modifying your inventory:
    - **CTRL + A** within the text document or select all, then **CTRL + C** or copy.
    - Go back to MongoDB and click within the **Value** field of the inventory entry.
      - Press **CTRL + A** (Select All) and **CTRL + V** (Paste).
    - Press the **Update** button on the right, and restart _The Cycle: Frontier_.

As long as everything was done correctly, you should now have a new item in your inventory.

---

## Troubleshooting

If the game does not load after modifying your inventory, restore your inventory back to its previous state:

1. Go back into MongoDB, find the inventory entry, and edit it.
2. Click in the **Value** field and press **CTRL + A**, then **Delete**.
3. Open the text document you saved earlier as **Inventory Backup**.
4. Copy all the text from the **Inventory Backup** text document and press **CTRL + C**.
5. Click in the **Value** field within MongoDB under the inventory entry and press **CTRL + V**.
6. Click **Update** on the right side of the entry.
7. Restart _The Cycle: Frontier_.
