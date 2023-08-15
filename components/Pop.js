import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { BsTextIndentLeft } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import useReadingList from "@/hooks/useReadingLater";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Pop({ item, isReadingList }) {
  const { createReadingLater, deleteReadingLater } = useReadingList();
  const { user } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function handleClick(item) {
    if (isReadingList) {
      deleteReadingLater(item.id);
      setOpen(false);
    } else {
      if (user) {
        createReadingLater({ ...item, user: user.id });
        setOpen(false);
      } else {
        router.push("/signin");
      }
    }
  }

  return (
    <Popover placement="bottom" open={open}>
      <PopoverHandler onClick={() => setOpen(!open)}>
        <Button className="right-0">
          {isReadingList ? (
            <FaTrash size={23} />
          ) : (
            <BsTextIndentLeft size={23}/>
          )}
        </Button>
      </PopoverHandler>
      <PopoverContent className="w-72">
        <List className="p-0">
          <ListItem className="text-initial" onClick={() => handleClick(item)}>
            <ListItemPrefix>
              {isReadingList ? (
                <FaTrash size={23} />
              ) : (
                <BsTextIndentLeft size={23} />
              )}
            </ListItemPrefix>
            {isReadingList ? "Delete" : "Add to ReadLater"}
          </ListItem>
        </List>
      </PopoverContent>
    </Popover>
  );
}
